#!/usr/bin/env node

export default class HolbertonCourse {
  constructor(name, length, students) {
    if (this._nameValidType(name)) this._name = name;
    if (this._lengthValidType(length)) this._length = length;
    if (this._studentsValidType(students)) this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (this._nameValidType(value)) {
      this._name = value;
    }
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (this._lengthValidType(value)) {
      this._length = value;
    }
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (this._studentsValidType(value)) {
      this._students = value;
    }
  }

  /* eslint-disable class-methods-use-this */
  _studentsValidType(arr) {
    const error = new TypeError('Students must be an array of strings');
    if (!Array.isArray(arr)) throw error;
    for (const v of arr) {
      if (typeof v !== 'string') throw error;
    }
    return true;
  }

  _lengthValidType(length) {
    const error = new TypeError('Length must be a number');
    if (typeof length !== 'number') throw error;
    return true;
  }

  _nameValidType(value) {
    const error = new TypeError('Name must be a string');
    if (typeof value !== 'string') throw error;
    return true;
  }
}
