import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage'
import { FireBaseStorage } from './firebaseConfig'

const storage = getStorage()
const storageRef = ref(storage)

const imagesRef = ref(storage, 'images')
const imagesCalendarRef = ref(storage, 'images/calendar')

export const test = () => {
  return getImagesByRef(storageRef)
}

export const getRef = (path = '') => {
  const fileRef = ref(storageRef, path)
  const { fullPath, name } = fileRef
  return { storageRef, fullPath, name }
}

export const listAllP = async (path = '') => {
  listAll(storageRef).then((res) => {
    res.items.forEach((itemRef) => {
      const { fullPath, name } = itemRef
      getDownloadURL(itemRef).then((url) => {
        console.log(url)
      }).catch((error) => { })
      console.log(fullPath, name)
    })
  }).catch((error) => {
    console.log(error)
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
