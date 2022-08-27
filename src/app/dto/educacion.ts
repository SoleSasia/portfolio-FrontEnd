export class Educacion {

    id? : number;
    tituloEdu : string;
    periodoEdu : string;
    institucionEdu : string;
    descripcionEdu : string;
    urlLogoEdu : string;  
    personaId : number;  
    
    constructor(tituloEdu : string, periodoEdu : string, institucionEdu : string, descripcionEdu : string, urlLogoEdu : string, personaId : number) {
        this.tituloEdu = tituloEdu;
        this.periodoEdu = periodoEdu;
        this.institucionEdu = institucionEdu;
        this.descripcionEdu = descripcionEdu;
        this.urlLogoEdu = urlLogoEdu;
        this.personaId = personaId;
    }
}
