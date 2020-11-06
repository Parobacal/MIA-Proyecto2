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
