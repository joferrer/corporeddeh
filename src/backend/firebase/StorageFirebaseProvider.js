import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  uploadBytes,
  deleteObject
} from 'firebase/storage'

const storage = getStorage()
const storageRef = ref(storage)

// const imagesRef = ref(storage, 'images')
const imagesCalendarRef = ref(storage, 'images/calendar')
const docsRef = ref(storage, 'docs')

const metadata = {
  contentType: 'image/jpeg'
}

export const test = () => {
  return getImagesByRef(storageRef)
}

export const getRef = (path = '') => {
  const fileRef = ref(storageRef, path)
  const { fullPath, name } = fileRef
  return { storageRef, fullPath, name }
}

/**
 * Save an image in the images folder according to the mouth and year.
 * @param {*} image image to save.
 * @param {string} mouth
 * @param {string} year
 * @param {string} UID name of the image.
 * @returns {Promise<{}>} A promise with the url of the image or an error.
 */
export const saveImageByMonth = async (image, mouth, year) => {
  const UID = Math.floor(Math.random() * 999999999)

  const fileRef = ref(imagesCalendarRef, `${mouth}-${year}/${UID}.jpg`)
  return uploadBytes(fileRef, image, metadata)
    .then(async (snapshot) => {
      const url = await getDownloadURL(snapshot.ref)
      return {
        url
      }
    })
    .catch((error) => {
      return {
        error: error.code
      }
    })
}

/**
 * Return a list of images from the images folder.
 * @param {*} ref reference to the images folder.
 * @returns {Promise<string[]>} list of images.
 */
export const getImagesByRef = async (ref) => {
  const list = await listAll(ref)
  const images = []
  list.items.forEach((itemRef) => {
    images.push(itemRef)
  })
  const urls = await Promise.all(images.map((image) => getDownloadURL(image)))
  return urls
}
/**
 * Asynchronous function to save documents to Firebase Storage.
 * @param {File} file - A File object representing the document to be saved.
 * @returns {Promise<{url?: string, error?: string}>} - Returns a promise that resolves to an object with the URL of the saved document or an error message.
 */
export const saveDocs = async (file) => {
  const fileRef = ref(docsRef, `${file.name}`)
  return uploadBytes(fileRef, file)
    .then(async (snapshot) => {
      const url = await getDownloadURL(snapshot.ref)
      return {
        url
      }
    })
    .catch((error) => {
      return {
        error: error.code
      }
    })
}

export const deleteDocsStorage = async (nameDoc) => {
  const fileRef = ref(docsRef, nameDoc)
  return deleteObject(fileRef)
    .then(async () => {
      return {
        status: 'success'
      }
    })
    .catch((error) => {
      return {
        error: error.code
      }
    })
}
/**
 * Delete all images from the images folder according to the mouth and year.
 * @param {*} mouth
 * @param {*} year
 * @returns {Promise<{}>} A promise with the url of the image or an error.
 */
export const deleteAllImagesForMonth = async (mouth, year) => {
  const list = await listAll(ref(imagesCalendarRef, `${mouth}-${year}`))
  const images = []
  list.items.forEach((itemRef) => {
    images.push(itemRef)
  })
  const urls = await Promise.all(images.map((image) => deleteObject(image)))
    .then(() => {
      return {
        status: 'success'
      }
    })
    .catch((error) => {
      return {
        status: 'error',
        error: error.code
      }
    })
  return urls
}
/**
 * Save a list of images in the images folder according to the event id and return a list of urls.
 * @param {[]} images
 * @param {String || Number} id
 * @returns {Promise<{status: string, urls?: string[], error?: string}>}
 */
export const saveListOfImagesByEvent = async (images, id) => {
  const promises = images.map(async (image) => {
    const UID = Math.floor(Math.random() * 999999999)
    const fileRef = ref(storageRef, `events/${id}/${UID}.jpg`)
    const snapshot = await uploadBytes(fileRef, image, metadata)
    const url = await getDownloadURL(snapshot.ref)
    return {
      url
    }
  })
  return Promise.all(promises)
    .then(async (res) => {
      const urls = res.map((img) => img.url)
      console.log(urls)
      return {
        status: 'success',
        urls
      }
    })
    .catch((error) => {
      return {
        status: 'error',
        error: error.code
      }
    })
}

export const deleteAImageOfAnEvent = async (id, name = '') => {
  const fileRef = ref(storageRef, `events/${id}/${name}`)
  return deleteObject(fileRef)
    .then(async () => {
      return {
        status: 'success'
      }
    })
    .catch((error) => {
      return {
        status: 'error',
        error: error.code
      }
    })
}
