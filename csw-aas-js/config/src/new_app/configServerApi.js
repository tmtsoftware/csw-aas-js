import request from "superagent";

export const addConfig = (path, message, token, configFileContent) => {
  const url = `http://localhost:5000/config/${path}?comment=${message}`;
  request
    .post(url)
    .set('Content-Type', 'text/plain')
    .set('Authorization', `Bearer ${token}`)
    .send(configFileContent)
    .then(
      res => {
        console.info(res.text);
        window.location.reload();
      },
      err => {
        console.error(err.toString())
      },
    );
};

export const deleteConfig = (path, token) => {
  const url = `http://localhost:5000/config/${path}?comment=delete file ${path}`;
  request
    .delete(url)
    .set('Content-Type', 'text/plain')
    .set('Authorization', `Bearer ${token}`)
    .send()
    .then(
      res => {
        console.info(res.text);
        window.location.reload();
      },
      err => {
        console.error(err.toString())
      },
    );
};
