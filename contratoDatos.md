### Crear un usuario

```js
// PUT /signup
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

### Creación de productos

```js
// PUT /CreateProduct
request :
    {
    payload:{
            sku:String,
            nombre:String,
            precio:Number,
            descripcion:Number,
            stock:Number,
            imagen:String
        }

    }
```

```js
// POST /ListProduct
### Obtención de productos
response:
{
    product:{
        
        date_create:Datetime,
        precio:Number,
        descripcion:Varchar,
        categoria:Varchar,
        imagen1:Varchar,
        imagen2:Varchar,
        imagen3:Varchar
    }
}
```
```js
// GET /ViewProduct
### Obtención de productos detalle

request:{
    payload:{
        id: Number

    }
}
response:
{
    product:{
        
        date_create:Datetime,
        precio:Number,
        descripcion:Varchar,
        categoria:Varchar,
        imagen1:Varchar,
        imagen2:Varchar,
        imagen3:Varchar
    }
}
```
```js
// DELETE /DeleteProduct
### Eliminación de productos

request:{
    payload:{
        id: publicacion_id

    }
}
response:
{
    result:Boolean
}
```
```js
### Deshabilitación de productos
// POST /UpdateProduct
request:{
    payload:{
        id: publicacion_id,
        estado:Boolean

    }
}
response:
{
    result:Boolean
}
```
```js
### Comprar
// POST /SaleProduct
request:{
    payload:{
        publicacion_id:Number,
        item:Number,
        cantidad:Number,
        usuario_id:Number
        fecha:Datetime,
        total:Number

    }
}
reponse:{
    result:boolean
}
```
```js
### Listado ventas por usuario
// POST /ListSales
request:{
    payload:{
        usuario_id: Number,
        estado:Boolean

    }
}
response:
{
    product:{
        publicacion_id:Number,
        item:Number,
        cantidad:Number
        fecha:Datetime,
        total:Number }
}
```

```js
### Listado compras por usuario
// POST /BuyUser
request:{
    payload:{
        usuario_id: Number,
        estado:Boolean

    }
}
response:
{
    product:{
        publicacion_id:Number,
        item:Number,
        cantidad:Number
        fecha:Datetime,
        total:Number 
    }
}
```

```js
### Listado ventas por usuario
// POST /SaleUser
request:{
    payload:{
        usuario_id: Number,
        estado:Boolean

    }
}
response:
{
    product:{
        orden_id:Number,
        item:Number,
        cantidad:Number
        fecha:Datetime,
        total:Number 
    }
}
```