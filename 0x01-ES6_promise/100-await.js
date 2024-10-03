#!/usr/bin/env node

import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  let photo;
  let user;
  try {
    // photo = await uploadPhoto();
    // user = await createUser();
    [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
  } catch (err) {
    [photo, user] = [null, null];
  }
  return { photo, user };
};

export default asyncUploadUser;
