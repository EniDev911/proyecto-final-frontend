### Crear un usuario

```js
// POST /signup
request :
    payload: {
        rut: String,
        email: String,
        fullname: String,
        address: String,
        phone: String,
        picture: String,
        password: String
}
```

---

### Iniciar sesión

```js
// POST /login
request :
    payload: {
        email: String,
        password: String
}

response:
    {
        token: String,
        user: {
            id: Number,
            email: String,
            picture: String
        }
    }
```