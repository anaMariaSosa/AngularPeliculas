export interface actorReadDTO {
    nombre: string;
    fechaNacimiento: Date;
    foto: string;
}

export interface actorDTO {
    nombre: string;
    fechaNacimiento: Date;
    foto: File;
}
