#!/usr/bin/env node
export default function getFullResponseFromAPI(success) {
  let result;
  if (success) {
    result = Promise.resolve({
      status: 200,
      body: 'Success',
    });
  } else {
    result = Promise.reject(new Error('The fake API is not working currently'));
  }
  return result;
}
