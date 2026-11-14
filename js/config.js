var LINKS = {
  wa: "",
  dc: ""
};

var ASSETS = {
  crest:       "images/Logo_Seleksi_Nasional_Berdasarkan_Tes_(SNBT).svg.png",
  bannerLeft:  "",
  bannerRight: ""
};

var SCHEDULE = {
  week: "(Periode)",
  items: [
    { day: "Hari, Tanggal",  time: "Waktu", title: "Duty", note: "Notes" },
    { day: "Hari, Tanggal",  time: "Waktu", title: "Duty", note: "Notes" },
    { day: "Hari, Tanggal",  time: "Waktu", title: "Duty", note: "Notes" }
  ]
};

var STAFF = [
  {
    tier: "Triune",
    desc: "",
    positions: [
      { role: "Marshal", tag: "Great General",
        desc: "Pemimpin tertinggi sekaligus pelopor dari Valthera Legion. Marshal memiliki kendali penuh atas operasi Legion.",
        members: [
          { name: "Zero", id: "1126000", status: "Active", sub: "Leadership", wa: "", dc: "" },
          { name: "One", id: "1126001", status: "Active", sub: "Organizer", wa: "", dc: "" }
        ] },
      { role: "Legate", tag: "Legion Commander",
        desc: "Leader untuk setiap dinamika aktivitas Valthera Legion, mulai dari expedition hingga event khusus. Legate menjadi wajah dari Legion itu sendiri.",
        members: [
           { name: "Leader",   id: "-"}
        ] }
    ]
  },
  {
    tier: "Segate",
    boxed: true,
     tag: "Staff",
    desc: "Staff yang menjalankan tugas operasional berdasarkan bidang masing-masing. Segate memiliki wewenang untuk mengatur, mengawasi, dan memastikan seluruh kegiatan dalam divisinya berjalan dengan baik, serta wajib mempertanggungjawabkan pelaksanaan tugasnya kepada Marshal.",
    positions: [
      { role: "Arbiter", tag: "Trainer",
        desc: "Melatih, mengarahkan, dan memastikan setiap Aspirant memiliki kesiapan, serta mendapat pembekalan terkait pengetahuan sistem, aturan baris-berbaris, sampai persiapan penobatannya menjadi Knight of Aldervane.",
        members: [
           { name: "Staff",   id: "-"}
        ] },
      { role: "Provost", tag: "Field Enforcement",
        desc: "Bertanggung jawab menjaga kedisiplinan dan ketertiban Legion. Mengawasi kegiatan lapangan, menjadi instruktur ekspedisi, mencatat waktu kegiatan, serta memastikan seluruh personel menjalankan tugas sesuai arahan.",
        members: [
          { name: "Arion", id: "1126002", status: "Active", wa: "", dc: "" }
        ] },
      { role: "Herald", tag: "Public Relation",
        desc: "Mengendalikan seluruh alur pemerataan informasi dan komunikasi Legion. Mengelola server, chat grup, menyampaikan pengumuman resmi, mempublikasikan kegiatan, serta menjadi penghubung antara Triune dan Legionnaires.",
        members: [
           { name: "Staff",   id: "-"}
        ] },
      { role: "Scrivener", tag: "Archiver",
        desc: "Mengelola seluruh arsip dokumen dan administrasi Legion. Mencatat kegiatan, mengelola formulir, mengatur database, serta memastikan arsip dan catatan resmi tersusun dengan rapi.",
        members: [
           { name: "Staff",   id: "-"}
        ] },
      { role: "Artificer", tag: "Designer",
        desc: "Menciptakan dan mengembangkan identitas visual Legion. Merancang uniform, insignia, serta berbagai perlengkapan yang menjadi kebanggaan seluruh Legionnaires.",
        members: [
           { name: "Staff",   id: "-"}
        ] }
    ]
  },
  {
    tier: "Knighthood",
    desc: "",
    positions: [
      { role: "Vanguard", tag: "Honorary Knight", desc: "Legionnaires yang berdiri di garis terdepan Valthera Legion. Vanguards adalah para pelopor dalam menghadapi tantangan, membuka jalan, dan membawa nama Legion ke luar Arx Divina.\n\nUntuk menjadi Vanguard, Legionnaires harus mengikuti seleksi bertahap dan uji kompetensi yang diadakan secara berkala. Vanguards direkrut, dilatih, dan dikomandoi langsung oleh Marshal."},
      { role: "Legionnaire", tag: "Sworn Knight", desc: "Para pejuang yang telah menjadi bagian dari barisan Valthera Legion. Legionnaires adalah Knights yang berdiri di bawah satu panji, terikat oleh sumpah, kehormatan, dan persaudaraan.\n\nLegionnaires pada awalnya merupakan seorang Aspirant yang telah membuktikan kelayakannya menjadi Knight. Aspirant dibimbing oleh para Arbiter dari awal bergabung hingga penobatan."}
    ]
  }
];
