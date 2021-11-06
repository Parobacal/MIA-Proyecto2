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


 CREATE TABLE carrito(
    idCompra INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    vendedor VARCHAR2(200),
    fk_idProducto INTEGER not null,
    fk_correo VARCHAR2(200),
    cantidad INTEGER DEFAULT 1,
    nombre VARCHAR2(200),
    precio INTEGER,     
    CONSTRAINT productoDCFK FOREIGN KEY (fk_idProducto) REFERENCES producto (idProducto),
    CONSTRAINT compradorFK FOREIGN KEY (fk_correo) REFERENCES usuario (correo)
);

 CREATE TABLE comentario(
    idComentario INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    fk_idProducto INTEGER NOT NULL,
    fk_correo VARCHAR2(150) NOT NULL,
    descripcion VARCHAR2(200) NOT NULL,
    fecha DATE NOT NULL, 
    CONSTRAINT cmproducto FOREIGN KEY (fk_idProducto) REFERENCES producto (idProducto),
    CONSTRAINT cmusuario FOREIGN KEY (fk_correo) REFERENCES usuario (correo)
);

 CREATE TABLE denuncia(
    idDenuncia INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    fk_idProducto INTEGER NOT NULL,
    fk_correo VARCHAR2(150) NOT NULL,
    descripcion VARCHAR2(200) NOT NULL,
    CONSTRAINT dnproducto FOREIGN KEY (fk_idProducto) REFERENCES producto (idProducto),
    CONSTRAINT dnusuario FOREIGN KEY (fk_correo) REFERENCES usuario (correo)
);


DELETE carrito;
DELETE comentario;
DELETE denuncia;
DELETE producto;
DELETE categoria;
DELETE usuario;


DROP TABLE carrito;
DROP TABLE comentario;
DROP TABLE denuncia;
DROP TABLE producto;
DROP TABLE categoria;
DROP TABLE usuario;


