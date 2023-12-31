import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from "firebase/storage";

const storage = getStorage();
const storageRef = ref(storage);

// const imagesRef = ref(storage, 'images')
const imagesCalendarRef = ref(storage, "images/calendar");
const docsRef = ref(storage, "docs");

const metadata = {
  contentType: "image/jpeg",
};

export const test = () => {
  return getImagesByRef(storageRef);
};

export const getRef = (path = "") => {
  const fileRef = ref(storageRef, path);
  const { fullPath, name } = fileRef;
  return { storageRef, fullPath, name };
};

/**
 * Save an image in the images folder according to the mouth and year.
 * @param {*} image image to save.
 * @param {string} mouth
 * @param {string} year
 * @param {string} UID name of the image.
 * @returns {Promise<{}>} A promise with the url of the image or an error.
 */
export const saveImageByMonth = async (image, mouth, year) => {
  const UID = Math.floor(Math.random() * 999999999);

  const fileRef = ref(imagesCalendarRef, `${mouth}-${year}/${UID}.jpg`);
  return uploadBytes(fileRef, image, metadata)
    .then(async (snapshot) => {
      const url = await getDownloadURL(snapshot.ref);
      return {
        url,
      };
    })
    .catch((error) => {
      return {
        error: error.code,
      };
    });
};

/**
 * Return a list of images from the images folder.
 * @param {*} ref reference to the images folder.
 * @returns {Promise<string[]>} list of images.
 */
export const getImagesByRef = async (ref) => {
  const list = await listAll(ref);
  const images = [];
  list.items.forEach((itemRef) => {
    images.push(itemRef);
  });
  const urls = await Promise.all(images.map((image) => getDownloadURL(image)));
  return urls;
};
/**
 * Asynchronous function to save documents to Firebase Storage.
 * @param {File} file - A File object representing the document to be saved.
 * @returns {Promise<{url?: string, error?: string}>} - Returns a promise that resolves to an object with the URL of the saved document or an error message.
 */
export const saveDocs = async (file) => {
  const fileRef = ref(docsRef, `${file.name}`);
  return uploadBytes(fileRef, file)
    .then(async (snapshot) => {
      const url = await getDownloadURL(snapshot.ref);
      return {
        url,
      };
    })
    .catch((error) => {
      return {
        error: error.code,
      };
    });
};

export const deleteDocsStorage = async (nameDoc) => {
  const fileRef = ref(docsRef, nameDoc);
  return deleteObject(fileRef)
    .then(async () => {
      return {
        status: "success",
      };
    })
    .catch((error) => {
      return {
        error: error.code,
      };
    });
};
