# memo-crud
Web API RESTful CRUD

| Routes                                      | Method        | Description                              |
| -------------                               |:-------------| ----------------------------------------|
| http://localhost:3000/api/memos/seed              | `POST`          | Headers : { key: auth, value: admin123 } |
| http://localhost:3000/api/memos                   | `POST`          | Add Memo                                 |
| http://localhost:3000/api/memos                  | `GET`           | Get All Memos                            |
| http://localhost:3000/api/memos/:id               | `GET`           | Get memo by ID                           |
| http://localhost:3000/api/memos/:id               | `DELETE`        | Delete memo by ID                        |
| http://localhost:3000/api/memos/:id               | `PUT`           | Update memo by ID                        |


```
npm i
cd memo-crud/public -> live-server
mongoose database
database = memos
```
