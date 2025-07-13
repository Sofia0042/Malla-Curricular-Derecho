/* ---------- Datos de cursos ---------- */
const courses = [
  /* === OBLIGATORIOS (cat:'oblig') === */
  // 1º Sem.
  {code:"DER1010",name:"Historia del Pens. Político y Teoría del Estado",sem:"1° Semestre",pre:[],credits:4,cat:"oblig"},
  {code:"DER1011",name:"Fuentes, Proceso y Bienes en el Der. Romano",sem:"1° Semestre",pre:[],credits:3,cat:"oblig"},
  {code:"DER1012",name:"Historia del Derecho Antiguo y Medieval",sem:"1° Semestre",pre:[],credits:3,cat:"oblig"},
  {code:"DER1013",name:"Fundamentos de Filosofía Práctica",sem:"1° Semestre",pre:[],credits:3,cat:"oblig"},
  {code:"DER1015",name:"Introducción al Estudio del Derecho Positivo Chileno",sem:"1° Semestre",pre:[],credits:3,cat:"oblig"},
  {code:"DER1016",name:"Taller de Memoria 1",sem:"1° Semestre",pre:[],credits:1,cat:"oblig"},
  {code:"ING9001",name:"Inglés 1",sem:"1° Semestre",pre:[],credits:2,cat:"oblig"},

  // 2º Sem.
  {code:"DER1020",name:"Teoría de la Constitución e Hist. Política y Const. de Chile",sem:"2° Semestre",pre:["DER1010"],credits:4,cat:"oblig"},
  {code:"DER1021",name:"Familia y Patrimonio en el Derecho Romano",sem:"2° Semestre",pre:["DER1011"],credits:4,cat:"oblig"},
  {code:"DER1022",name:"Historia del Derecho Moderno y Contemporáneo",sem:"2° Semestre",pre:["DER1012"],credits:3,cat:"oblig"},
  {code:"DER1023",name:"Teoría de la Normatividad",sem:"2° Semestre",pre:["DER1013"],credits:3,cat:"oblig"},
  {code:"DER1024",name:"Judicatura",sem:"2° Semestre",pre:["DER1015"],credits:3,cat:"oblig"},
  {code:"ING9002",name:"Inglés 2",sem:"2° Semestre",pre:["ING9001"],credits:2,cat:"oblig"},

  // 3º Sem.
  {code:"DER1030",name:"Derecho Constitucional Orgánico",sem:"3° Semestre",pre:["DER1015","DER1020","DER1010","DER1011","DER1012","DER1013"],credits:3,cat:"oblig"},
  {code:"DER1031",name:"Derecho Internacional Público",sem:"3° Semestre",pre:["DER1015","DER1020","DER1010","DER1011","DER1012","DER1013"],credits:4,cat:"oblig"},
  {code:"DER1032",name:"Negocio Jurídico",sem:"3° Semestre",pre:["DER1015","DER1010","DER1021","DER1011","DER1012","DER1013"],credits:4,cat:"oblig"},
  {code:"DER2034",name:"Estrat. de Producción del Discurso Oral",sem:"3° Semestre",pre:["DER1015","DER1010","DER1011","DER1012","DER1013"],credits:3,cat:"oblig"},
  {code:"DER1035",name:"Tutela Judicial Efectiva y Debido Proceso",sem:"3° Semestre",pre:["DER1024","DER1010","DER1011","DER1012","DER1013","DER1015"],credits:3,cat:"oblig"},
  {code:"DER1036",name:"Taller de Memoria 2",sem:"3° Semestre",pre:["DER1016"],credits:1,cat:"oblig"},
  {code:"ING9003",name:"Inglés 3",sem:"3° Semestre",pre:["ING9002"],credits:2,cat:"oblig"},

  // 4º Sem.
  {code:"DER1040",name:"Derechos Fundamentales",sem:"4° Semestre",pre:["DER1015","DER1010","DER1020","DER1011","DER1012","DER1013"],credits:3,cat:"oblig"},
  {code:"DER1041",name:"Bienes",sem:"4° Semestre",pre:["DER1015","DER1032","DER1021","DER1010","DER1011","DER1012","DER1013"],credits:4,cat:"oblig"},
  {code:"DER1042",name:"Disposiciones Comunes a Todo Procedimiento",sem:"4° Semestre",pre:["DER1035","DER1015","DER1010","DER1011","DER1012","DER1013"],credits:4,cat:"oblig"},
  {code:"DER1043",name:"Teoría del Delito",sem:"4° Semestre",pre:["DER1015","DER1023","DER1010","DER1011","DER1012","DER1013"],credits:4,cat:"oblig"},
  {code:"ING9004",name:"Inglés 4",sem:"4° Semestre",pre:["ING9003"],credits:2,cat:"oblig"},

  // 5º Sem.
  {code:"DER1050",name:"Bases del Derecho Administrativo",sem:"5° Semestre",pre:["DER1030","DER1040"],credits:3,cat:"oblig"},
  {code:"DER1051",name:"Derecho Individual del Trabajo",sem:"5° Semestre",pre:["DER1015","DER1032","DER1010","DER1011","DER1012","DER1013"],credits:3,cat:"oblig"},
  {code:"DER1052",name:"Derecho y Orden Económico",sem:"5° Semestre",pre:["DER1040"],credits:3,cat:"oblig"},
  {code:"DER1053",name:"Obligaciones y Contratos",sem:"5° Semestre",pre:["DER1032","DER1041","DER1021"],credits:4,cat:"oblig"},
  {code:"DER1055",name:"Responsabilidad Penal",sem:"5° Semestre",pre:["DER1043"],credits:4,cat:"oblig"},
  {code:"DER1056",name:"Taller de Memoria 3",sem:"5° Semestre",pre:["DER1036"],credits:1,cat:"oblig"},
  {code:"DER1057",name:"Juicio Declarativo y Prueba",sem:"5° Semestre",pre:["DER1042"],credits:3,cat:"oblig"},

  // 6º Sem.
  {code:"DER1060",name:"Actuación de la Administración del Estado",sem:"6° Semestre",pre:["DER1050","DER1032"],credits:3,cat:"oblig"},
  {code:"DER1061",name:"Derecho Colectivo del Trabajo",sem:"6° Semestre",pre:["DER1051"],credits:3,cat:"oblig"},
  {code:"DER1062",name:"Regulación Económica y Derecho de la Libre Competencia",sem:"6° Semestre",pre:["DER1052"],credits:3,cat:"oblig"},
  {code:"DER1063",name:"Responsabilidad Civil",sem:"6° Semestre",pre:["DER1053","DER1032","DER1041"],credits:4,cat:"oblig"},
  {code:"DER1064",name:"Recursos Procesales",sem:"6° Semestre",pre:["DER1057"],credits:4,cat:"oblig"},
  {code:"DER1065",name:"Delito contra Intereses Individuales",sem:"6° Semestre",pre:["DER1055"],credits:4,cat:"oblig"},
  {code:"DER1066",name:"Enseñanza Clínica: Negociación y Formas Autocompositivas",sem:"6° Semestre",pre:["DER1035"],credits:2,cat:"oblig"},

  // 7º Sem.
  {code:"DER1070",name:"Control y Respons. de la Administración del Estado",sem:"7° Semestre",pre:["DER1057","DER1060","DER1063"],credits:3,cat:"oblig"},
  {code:"DER1071",name:"Introd. al Der. Comercial y Org. Jurídica de la Empresa",sem:"7° Semestre",pre:["DER1015","DER1010","DER1011","DER1012","DER1013"],credits:3,cat:"oblig"},
  {code:"DER1072",name:"Derecho de los Mercados Financieros",sem:"7° Semestre",pre:["DER1052","DER1062"],credits:3,cat:"oblig"},
  {code:"DER1073",name:"Contratos en Particular",sem:"7° Semestre",pre:["DER1063","DER1053","DER1032","DER1041","DER1021"],credits:4,cat:"oblig"},
  {code:"DER1076",name:"Taller de Memoria 4",sem:"7° Semestre",pre:["DER1056"],credits:1,cat:"oblig"},
  {code:"DER1077",name:"Ejecución y Tutela Cautelar",sem:"7° Semestre",pre:["DER1064"],credits:3,cat:"oblig"},

  // 8º Sem.
  {code:"DER1075",name:"Derecho Procesal Penal",sem:"8° Semestre",pre:["DER1064","DER1065"],credits:4,cat:"oblig"},
  {code:"DER1080",name:"Derecho Tributario",sem:"8° Semestre",pre:["DER1071"],credits:3,cat:"oblig"},
  {code:"DER1081",name:"Sociedades de Capital",sem:"8° Semestre",pre:["DER1071","DER1073"],credits:3,cat:"oblig"},
  {code:"DER1082",name:"Teoría del Ordenamiento Jurídico",sem:"8° Semestre",pre:["DER1023"],credits:3,cat:"oblig"},
  {code:"DER1083",name:"Familia",sem:"8° Semestre",pre:["DER1073","DER1063","DER1053","DER1032","DER1041","DER1021"],credits:4,cat:"oblig"},
  {code:"DER1084",name:"Enseñanza Clínica: Litigación Oral",sem:"8° Semestre",pre:["DER1057"],credits:2,cat:"oblig"},

  // 9º Sem.
  {code:"DER1090",name:"Enseñanza Clínica: Pasantía Profesional",sem:"9° Semestre",pre:[],credits:3,cat:"oblig"},
  {code:"DER1091",name:"Derecho Concursal y de Seguros",sem:"9° Semestre",pre:["DER1081"],credits:3,cat:"oblig"},
  {code:"DER1092",name:"Filosofía del Derecho y Teorías de la Justicia",sem:"9° Semestre",pre:[],credits:3,cat:"oblig"},
  {code:"DER1093",name:"Sucesiones",sem:"9° Semestre",pre:["DER1083","DER1073","DER1063","DER1053","DER1032","DER1041","DER1021"],credits:3,cat:"oblig"},
  {code:"DER1094",name:"Ética Profesional",sem:"9° Semestre",pre:[],credits:2,cat:"oblig"},
  {code:"DER1096",name:"Memoria",sem:"9° Semestre",pre:["DER1075","DER1080","DER1081","DER1082","DER1083","DER1084","DER1016","DER1036","DER1056","DER1076"],credits:1,cat:"oblig"},

  // 10º Sem.
  {code:"DER1100",name:"Licenciatura",sem:"10° Semestre",pre:[],credits:20,cat:"oblig"},

  /* === FOFUS (cat:'fofu') === */
  {code:"FOFU1",name:"Antropología Cristiana",sem:"FOFUS y Optativos",pre:[],credits:2,cat:"fofu"},
  {code:"FOFU2",name:"Ética Cristiana",sem:"FOFUS y Optativos",pre:[],credits:2,cat:"fofu"},
  {code:"FOFU3",name:"FOFU 3",sem:"FOFUS y Optativos",pre:[],credits:2,cat:"fofu"},
  {code:"FOFU4",name:"FOFU 4",sem:"FOFUS y Optativos",pre:[],credits:2,cat:"fofu"},
  {code:"FOFU5",name:"FOFU 5",sem:"FOFUS y Optativos",pre:[],credits:2,cat:"fofu"},

  /* === OPTATIVOS (cat:'opt') === */
  {code:"OPT1",name:"Optativo I",sem:"FOFUS y Optativos",pre:[],credits:2,cat:"opt"},
  {code:"OPT2",name:"Optativo II",sem:"FOFUS y Optativos",pre:[],credits:2,cat:"opt"},
  {code:"OPT3",name:"Optativo III",sem:"FOFUS y Optativos",pre:[],credits:2,cat:"opt"}
];

/* ---------- Render y lógica ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  const passed = new Set();
  const map = Object.fromEntries(courses.map(c=>[c.code,c]));

  /* Agrupar por semestre / sección */
  [...new Set(courses.map(c=>c.sem))].forEach(sem => {
    const sec=document.createElement("section");
    sec.innerHTML=`<h2>${sem}</h2><div class="semester"></div>`;
    app.appendChild(sec);

    courses.filter(c=>c.sem===sem).forEach(c=>{
      const div=document.createElement("div");
      div.className="course locked";
      div.dataset.code=c.code;
      div.dataset.pre=c.pre.join(",");
      div.innerHTML=`
        <span class="code">${c.code}</span>
        <span class="name">${c.name}</span>
        <span class="credits">${c.credits} cr.</span>`;
      div.addEventListener("click",()=>toggle(div));
      sec.querySelector(".semester").appendChild(div);
    });
  });

  /* Marcar / desmarcar aprobado */
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

  /* Re‑calcular créditos aprobados */
    /* Re‑calcular créditos aprobados */
  function getCreditTotals(){
    const tot={oblig:0,opt:0,fofu:0};
    passed.forEach(code=>{
      const c=map[code];
      if(c) tot[c.cat]+=c.credits;
    });
    return tot;
  }

  /* Habilitar / deshabilitar ramos */
  function updateLocks(){
    const totals=getCreditTotals();
    document.querySelectorAll(".course").forEach(el=>{
      const code=el.dataset.code;
      const prereqs=el.dataset.pre?el.dataset.pre.split(",").filter(Boolean):[];

      let unlocked=true;
      if(code==="DER1100"){ // ► Licenciatura
        unlocked = totals.oblig>=170 && totals.opt>=6 && totals.fofu>=10;
      }else{
        unlocked = prereqs.every(p=>passed.has(p));
      }

      if(passed.has(code)){
        el.classList.remove("locked");
      }else if(unlocked){
        el.classList.remove("locked");
      }else{
        el.classList.add("locked");
        el.classList.remove("passed");
        passed.delete(code);
      }
    });
  }

  updateLocks();   // primera evaluación
});
