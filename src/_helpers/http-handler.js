import { authHeader } from "./auth-header"
import { toast } from "react-toastify"

const access_token = localStorage.getItem("access_token")


export const post = (url, payload) => {
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify(payload),
  }

  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data
    })
}

export const postFileUpload = (url, payload) => {
  console.log(payload)
  const requestOptions = {
    method: "POST",
    headers: { Authorization: "Bearer " + access_token },
    body: payload,
  }

  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data
    })
}

export const patchFileUpload = (url, payload) => {
  const requestOptions = {
    method: "PATCH",
    headers: { Authorization: "Bearer " + access_token },
    body: payload,
  }

  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data
    })
}


export const postFileDelete = (url) => {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(),
  }

  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data
    })
}

export const patch = (url, payload) => {
  const requestOptions = {
    method: "PATCH",
    headers: authHeader(),
    body: JSON.stringify(payload),
  }

  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data
    })
}

export const get = (url) => {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  }
  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data
    })
}

export const Delete = (url) => {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(),
  }
  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data
    })
}

function logout() {
  localStorage.clear()
}
function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout()
        // window.location.reload(true);
      }
      const error = (data && data.message) || response.statusText
      toast.error(error)
      return Promise.reject(error)
    }
    return data
  })
}
