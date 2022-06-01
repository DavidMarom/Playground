// This page allows to update the users collection by uploading a txt file

import { useContext, useEffect, useState } from "react";
import { PageContext } from "../Context";
import { httpService } from '../services/httpService';

export const UploadFile = () => {
  const { value, setValue } = useContext(PageContext);

  const [file, setFile] = useState('');
  const [filename, setFilename] = useState();

  useEffect(() => { setValue("upload file"); });

  const onChange = (e: any) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);

  }

  const onSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file)
    httpService.post('file/insert-to-db',formData);
  }

  return (
    <>
      <h1>{value}</h1>

      <form onSubmit={onSubmit}>
        <div className="file-input">
          <input type='file' id='custimeFile' onChange={onChange} />
          <label htmlFor='customFile'>
            {filename}
          </label>
        </div>
        <input type="submit" value="Upload" />
      </form>


    </>
  );
};
