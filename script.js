// ---------- LISTA DE CURSOS ----------
const courses = [
  // PRIMER SEMESTRE
  {code:"DER1010",name:"Historia del Pensamiento Político y Teoría del Estado",sem:"Primer Semestre",pre:[]},
  {code:"DER1011",name:"Fuentes, Proceso y Bienes en el Derecho Romano",sem:"Primer Semestre",pre:[]},
  {code:"DER1012",name:"Historia del Derecho Antiguo y Medieval",sem:"Primer Semestre",pre:[]},
  {code:"DER1013",name:"Fundamentos de Filosofía Práctica",sem:"Primer Semestre",pre:[]},
  {code:"DER1015",name:"Introducción al Estudio del Derecho Positivo Chileno",sem:"Primer Semestre",pre:[]},
  {code:"DER1016",name:"Taller de Memoria 1",sem:"Primer Semestre",pre:[]},
  {code:"ING9001",name:"Inglés 1",sem:"Primer Semestre",pre:[]},

  // SEGUNDO SEMESTRE
  {code:"DER1020",name:"Teoría de la Constitución e Historia Política y Constitucional de Chile",sem:"Segundo Semestre",pre:["DER1010"]},
  {code:"DER1021",name:"Familia y Patrimonio en el Derecho Romano",sem:"Segundo Semestre",pre:["DER1011"]},
  {code:"DER1022",name:"Historia del Derecho Moderno y Contemporáneo",sem:"Segundo Semestre",pre:["DER1012"]},
  {code:"DER1023",name:"Teoría de la Normatividad",sem:"Segundo Semestre",pre:["DER1013"]},
  {code:"DER1024",name:"Judicatura",sem:"Segundo Semestre",pre:["DER1015"]},
  {code:"ING9002",name:"Inglés 2",sem:"Segundo Semestre",pre:["ING9001"]},

  // TERCER SEMESTRE
  {code:"DER1030",name:"Derecho Constitucional Orgánico",sem:"Tercer Semestre",pre:["DER1015","DER1020","DER1010","DER1011","DER1012","DER1013"]},
  {code:"DER1031",name:"Derecho Internacional Público",sem:"Tercer Semestre",pre:["DER1015","DER1020","DER1010","DER1011","DER1012","DER1013"]},
  {code:"DER1032",name:"Negocio Jurídico",sem:"Tercer Semestre",pre:["DER1015","DER1010","DER1021","DER1011","DER1012","DER1013"]},
  {code:"DER2034",name:"Estrategias de Producción del Discurso Oral",sem:"Tercer Semestre",pre:["DER1015","DER1010","DER1011","DER1012","DER1013"]},
  {code:"DER1035",name:"Tutela Judicial Efectiva y Debido Proceso",sem:"Tercer Semestre",pre:["DER1024","DER1010","DER1011","DER1012","DER1013","DER1015"]},
  {code:"DER1036",name:"Taller de Memoria 2",sem:"Tercer Semestre",pre:["DER1016"]},
  {code:"ING9003",name:"Inglés 3",sem:"Tercer Semestre",pre:["ING9002"]},

  // CUARTO SEMESTRE
  {code:"DER1040",name:"Derechos Fundamentales",sem:"Cuarto Semestre",pre:["DER1015","DER1010","DER1020","DER1011","DER1012","DER1013"]},
  {code:"DER1041",name:"Bienes",sem:"Cuarto Semestre",pre:["DER1015","DER1032","DER1021","DER1010","DER1011","DER1012","DER1013"]},
  {code:"DER1042",name:"Disposiciones Comunes a Todo Procedimiento",sem:"Cuarto Semestre",pre:["DER1035","DER1015","DER1010","DER1011","DER1012","DER1013"]},
  {code:"DER1043",name:"Teoría del Delito",sem:"Cuarto Semestre",pre:["DER1015","DER1023","DER1010","DER1011","DER1012","DER1013"]},
  {code:"ING9004",name:"Inglés 4",sem:"Cuarto Semestre",pre:["ING9003"]},

  // QUINTO SEMESTRE
  {code:"DER1050",name:"Bases del Derecho Administrativo",sem:"Quinto Semestre",pre:["DER1030","DER1040"]},
  {code:"DER1051",name:"Derecho Individual del Trabajo",sem:"Quinto Semestre",pre:["DER1015","DER1032","DER1010","DER1011","DER1012","DER1013"]},
  {code:"DER1052",name:"Derecho y Orden Económico",sem:"Quinto Semestre",pre:["DER1040"]},
  {code:"DER1053",name:"Obligaciones y Contratos",sem:"Quinto Semestre",pre:["DER1032","DER1041","DER1021"]},
  {code:"DER1055",name:"Responsabilidad Penal",sem:"Quinto Semestre",pre:["DER1043"]},
  {code:"DER1056",name:"Taller de Memoria 3",sem:"Quinto Semestre",pre:["DER1036"]},
  {code:"DER1057",name:"Juicio Declarativo y Prueba",sem:"Quinto Semestre",pre:["DER1042"]},

  // SEXTO SEMESTRE
  {code:"DER1060",name:"Actuación de la Administración del Estado",sem:"Sexto Semestre",pre:["DER1050","DER1032"]},
  {code:"DER1061",name:"Derecho Colectivo del Trabajo",sem:"Sexto Semestre",pre:["DER1051"]},
  {code:"DER1062",name:"Regulación Económica y Derecho de la Libre Competencia",sem:"Sexto Semestre",pre:["DER1052"]},
  {code:"DER1063",name:"Responsabilidad Civil",sem:"Sexto Semestre",pre:["DER1053","DER1032","DER1041"]},
  {code:"DER1064",name:"Recursos Procesales",sem:"Sexto Semestre",pre:["DER1057"]},
  {code:"DER1065",name:"Delito contra Intereses Individuales",sem:"Sexto Semestre",pre:["DER1055"]},
  {code:"DER1066",name:"Enseñanza Clínica: Negociación y Formas Autocompositivas",sem:"Sexto Semestre",pre:["DER1035"]},

  // SÉPTIMO SEMESTRE
  {code:"DER1070",name:"Control y Responsabilidad de la Administración del Estado",sem:"Séptimo Semestre",pre:["DER1057","DER1060","DER1063"]},
  {code:"DER1071",name:"Intro. al Derecho Comercial y Org. Jurídica de la Empresa",sem:"Séptimo Semestre",pre:["DER1015","DER1010","DER1011","DER1012","DER1013"]},
  {code:"DER1072",name:"Derecho de los Mercados Financieros",sem:"Séptimo Semestre",pre:["DER1052","DER1062"]},
  {code:"DER1073",name:"Contratos en Particular",sem:"Séptimo Semestre",pre:["DER1063","DER1053","DER1032","DER1041","DER1021"]},
  {code:"DER1076",name:"Taller de Memoria 4",sem:"Séptimo Semestre",pre:["DER1056"]},
  {code:"DER1077",name:"Ejecución y Tutela Cautelar",sem:"Séptimo Semestre",pre:["DER1064"]},

  // OCTAVO SEMESTRE
  {code:"DER1075",name:"Derecho Procesal Penal",sem:"Octavo Semestre",pre:["DER1064","DER1065"]},
  {code:"DER1080",name:"Derecho Tributario",sem:"Octavo Semestre",pre:["DER1071"]},
  {code:"DER1081",name:"Sociedades de Capital",sem:"Octavo Semestre",pre:["DER1071","DER1073"]},
  {code:"DER1082",name:"Teoría del Ordenamiento Jurídico",sem:"Octavo Semestre",pre:["DER1023"]},
  {code:"DER1083",name:"Familia",sem:"Octavo Semestre",pre:["DER1073","DER1063","DER1053","DER1032","DER1041","DER1021"]},
  {code:"DER1084",name:"Enseñanza Clínica: Litigación Oral",sem:"Octavo Semestre",pre:["DER1057"]},

  // NOVENO SEMESTRE
  {code:"DER1090",name:"Enseñanza Clínica: Pasantía Profesional",sem:"Noveno Semestre",pre:[]},
  {code:"DER1091",name:"Derecho Concursal y de Seguros",sem:"Noveno Semestre",pre:["DER1081"]},
  {code:"DER1092",name:"Filosofía del Derecho y Teorías de la Justicia",sem:"Noveno Semestre",pre:[]},
  {code:"DER1093",name:"Sucesiones",sem:"Noveno Semestre",pre:["DER1083","DER1073","DER1063","DER1053","DER1032","DER1041","DER1021"]},
  {code:"DER1094",name:"Ética Profesional",sem:"Noveno Semestre",pre:[]},
  {code:"DER1096",name:"Memoria",sem:"Noveno Semestre",pre:["DER1075","DER1080","DER1081","DER1082","DER1083","DER1084","DER1016","DER1036","DER1056","DER1076"]},

  // DÉCIMO SEMESTRE
  {code:"DER1100",name:"Licenciatura",sem:"Décimo Semestre",pre:[]}
];

// ---------- RENDER Y LÓGICA DE DESBLOQUEO ----------
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  const passed = new Set();
  const allCodes = new Set(courses.map(c => c.code));

  /* 1. Renderizar agrupados por semestre */
  [...new Set(courses.map(c=>c.sem))].forEach(sem => {
    const sec = document.createElement("section");
    sec.innerHTML = `<h2>${sem}</h2><div class="semester"></div>`;
    app.appendChild(sec);

    courses
      .filter(c=>c.sem===sem)
      .forEach(c=>{
        const div=document.createElement("div");
        div.className="course locked";
        div.dataset.code=c.code;
        div.dataset.pre=c.pre.join(",");
        div.innerHTML=`<span class="code">${c.code}</span><br><span class="name">${c.name}</span>`;
        div.addEventListener("click",()=>toggle(div));
        sec.querySelector(".semester").appendChild(div);
      });
  });

  /* 2. Función para marcar aprobado / desaprobado */
  function toggle(el){
    if(el.classList.contains("locked")) return;
    const code=el.dataset.code;
    if(passed.has(code)){
      passed.delete(code);
      el.classList.remove("passed");
    }else{
      passed.add(code);
      el.classList.add("passed");
    }
    updateLocks();
  }

  /* 3. Evaluar qué ramos siguen bloqueados */
  function updateLocks(){
    document.querySelectorAll(".course").forEach(el=>{
      const code=el.dataset.code;
      const prereqs=el.dataset.pre?el.dataset.pre.split(",").filter(Boolean):[];

      // Un prerequisito que NO existe en la malla se considera satisfecho (son requisitos externos)
      const unlocked = prereqs.every(p=>!allCodes.has(p) || passed.has(p));

      if(passed.has(code)){
        el.classList.remove("locked");             // aprobado = siempre visible
      }else if(unlocked){
        el.classList.remove("locked");             // requisitos cumplidos
      }else{
        el.classList.add("locked");                // aún bloqueado
        el.classList.remove("passed");
        passed.delete(code);
      }
    });
  }

  updateLocks(); // primera evaluación al cargar
});
