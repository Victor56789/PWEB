function redirecionaCurso() {
    const cursos = document.getElementById("cursosFatec")

    if (cursos.value == "analiseSistemas") {
        window.location.assign("http://www.fatecsorocaba.edu.br/curso_ads.asp")
    }
    if (cursos.value == "eletrônicaAutomotiva") {
        window.location.assign("http://www.fatecsorocaba.edu.br/curso_ea.asp")
    }
    if (cursos.value == "fabricaçãoMecânica") {
        window.location.assign("http://www.fatecsorocaba.edu.br/curso_fm.asp")
    }
    if (cursos.value == "gestaoQualidade") {
        window.location.assign("http://www.fatecsorocaba.edu.br/curso_gq.asp")
    }
    if (cursos.value == "logistica") {
        window.location.assign("http://www.fatecsorocaba.edu.br/curso_log.asp")
    }
    if (cursos.value == "manufaturaAvançada") {
        window.location.assign("http://www.fatecsorocaba.edu.br/curso_ma.asp")
    }
    if (cursos.value == "polímeros") {
        window.location.assign("http://www.fatecsorocaba.edu.br/curso_pol.asp")
    }
    if (cursos.value == "projetosMecanicos") {
        window.location.assign("http://www.fatecsorocaba.edu.br/curso_pm.asp")
    }
    if (cursos.value == "processosMetalúrgicos") {
        window.location.assign("http://www.fatecsorocaba.edu.br/curso_proj.asp")
    }
    if (cursos.value == "sistemasBiomédicos") {
        window.location.assign("http://www.fatecsorocaba.edu.br/curso_sb.asp")
    }
}

/*"analiseSistemas">Análise e Desenvolvimento de Sistemas</option>
        <option value="eletrônicaAutomotiva">Eletrônica Automotiva</option>
        <option value="fabricaçãoMecânica">Fabricação Mecânica</option>
        <option value="gestãoQualidade">Gestão da Qualidade</option>
        <option value="logistica">Logistica</option>
        <option value="manufaturaAvançada">Manufatura Avançada</option>
        <option value="polímeros">Polímeros</option>
        <option value="processosMetalúrgicos">Processos Metalúrgicos</option>
        <option value="projetosMecânicos">Projetos Mecânicos</option>
        <option value="sistemasBiomédicos*/