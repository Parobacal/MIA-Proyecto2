CREATE TABLE usuario(
    nombre VARCHAR2(40) NOT NULL,
    apellido VARCHAR2(40) NOT NULL,
    clave VARCHAR2(30) NOT NULL,
    correo VARCHAR2(60) PRIMARY KEY NOT NULL,
    imagen VARCHAR2(200),
    fecha_nacimiento DATE,
    pais VARCHAR2(40),
    credito INTEGER,
    estado  NUMBER(1,0)
);

INSERT INTO usuario (nombre,apellido,clave,correo,estado) VALUES ('admin','admin','1234','admin',1);

CREATE TABLE categoria(
    idCategoria NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR2(40) NOT NULL
);

CREATE TABLE producto(
    idProducto NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    fk_idCategoria INTEGER NOT NULL,
    fk_correo VARCHAR2(200) NOT NULL,
    imagen VARCHAR2(200),
    nombre VARCHAR2(40) NOT NULL,
    detalle_producto VARCHAR2(450) NOT NULL,
    palabras_clave VARCHAR2(200) NOT NULL,
    precio INTEGER NOT NULL,
    me_gusta INTEGER,
    no_me_gusta INTEGER,
    estado NUMBER(1,0),
    CONSTRAINT categoriaProductoFK FOREIGN KEY (fk_idCategoria) REFERENCES categoria (idCategoria),
    CONSTRAINT usuarioProductoFK FOREIGN KEY (fk_correo) REFERENCES usuario (correo)
);

INSERT INTO producto (imagen,nombre,detalle_producto,palabras_clave,precio,categoria,me_gusta,no_me_gusta,estado) VALUES ('uploads/55fd9711-c162-4780-9f6c-4123ebc594a4.png','FONDO','ES UN FONDO','CHILERO CALIDAD BUENO',240,'DIGITAL',12,4,1);

