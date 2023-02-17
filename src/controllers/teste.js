import { modelAPONTAMENTOS } from "../models/APONTAMENTOS.js";
import { modelATIVIDADES } from "../models/ATIVIDADES.js";
import { modelCLASSE_DE_ATIVIDADES } from "../models/CLASSE_DE_ATIVIDADE.js";
import { modelCLIENTES } from "../models/CLIENTES.js";
import { modelFERIAS } from "../models/FERIAS.js";
import { modelPESSOAL_IC } from "../models/PESSOAL_IC.js";
import { modelPROJETOS } from "../models/PROJETOS.js";
import { modelPROJETOS_SPI } from "../models/PROJETOS_SPI.js";

var TESTE = async (req, res) => {
    try{
        const Apontamentos = await modelAPONTAMENTOS.findAll();
        const Atividades = await modelATIVIDADES.findAll();
        const Classe_de_atividades = await modelCLASSE_DE_ATIVIDADES.findAll();
        const Clientes = await modelCLIENTES.findAll();
        const Ferias = await modelFERIAS.findAll();
        const Pessoal_ic = await modelPESSOAL_IC.findAll();
        const Projetos_spi = await modelPROJETOS_SPI.findAll();
        const Projetos = await modelPROJETOS.findAll();

        const all = [];
        all.push(Apontamentos);
        all.push(Atividades);
        all.push(Classe_de_atividades);
        all.push(Clientes);
        all.push(Ferias);
        all.push(Pessoal_ic);
        all.push(Projetos_spi);
        all.push(Projetos);

        res.send(all);
    }
    catch (error) {
        console.log("Erro: " + error);
    }
};

export { TESTE };