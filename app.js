$(document).ready(()=>{

    $("#btn_refresh").click(()=>{
        window.location.reload()
    });
    
    const $testimonials = $("#testimonials_content");

    const updateTestimonials = () =>{
        $testimonials.empty();
        $.getJSON("https://randomuser.me/api/?results=4",(data)=>{
            $.each(data.results, (index, user)=>{
                const listComments = ['"Increíble experiencia. Defendieron mis derechos con firmeza y dedicación en un caso complejo. Su profesionalismo hizo toda la diferencia. ¡Altamente recomendables!"',
                    '"Quedé impresionado con la eficiencia de este bufete. Resolvieron mi caso de indemnización en tiempo récord, siempre manteniéndome informado. ¡Un servicio impecable!"',
                    '"Como extranjero, no conocía bien mis derechos. Estos abogados no solo me orientaron, sino que ganaron mi caso de inmigración. ¡Profesionales de verdad!"',
                    '"Después de una mala experiencia con otro estudio, aquí encontré seriedad y resultados. Lucharon por lo que era justo en mi divorcio. ¡Gracias por su compromiso!"',
                    '"Contraté los servicios de este bufete para un caso laboral y quedé muy satisfecho. Los abogados fueron profesionales, claros y resolvieron mi problema rápidamente. ¡Totalmente recomendados!"',
                    '"Contratarlos fue la mejor decisión. Tenía un problema contractual complejo y lo manejaron con expertise, ahorrándome tiempo y estrés. ¡Los recomiendo sin duda!"',
                    '"Excelente servicio legal. Me asesoraron en un tema de familia con mucha empatía y expertise. Gracias a ellos, logramos un acuerdo justo. ¡Muy agradecido!"',
                    '"Necesitaba ayuda con un contrato y recibí un trato excepcional. El equipo fue diligente, respondió todas mis dudas y me guió paso a paso. ¡Los elegiría otra vez!"'];
                const randomComment = listComments[Math.floor(Math.random() * listComments.length)];
                const testimonial = `<div class="users">
                                                <div class="photo_user">
                                                    <a><img class="image" width="100" src=${user.picture.thumbnail}></a>
                                                    <div class="name_user"><strong>${user.name.first} ${user.name.last}</strong></div>
                                                    <div class="testimonial_user">${randomComment}</div>
                                                </div>` ;
                                    
                $testimonials.append(testimonial)
            })
        }).fail((error)=>{
            alert("The page failes, the problem: ",error);
        })
        
    }

    updateTestimonials();



    $(".worker").mouseenter(()=>{
        $(".worker").css("background","rgb(205, 236, 205)")
        
    });
    $(".worker").mouseleave(()=>{
        $(".worker").css("background","rgb(255, 255, 255)")
    });


    $("#button").click(()=>{
        alert("No hay nada para ti :(")
    });


    let isExpanded = false;
    let isExpanded2 = false;
    let isExpanded3 = false;
    let isExpanded4 = false;
$(".dropdown1").click(() => {
    if (!isExpanded) {
        $(".q").text(`En nuestro bufete de abogados, nos destacamos por un 
            enfoque meticuloso y personalizado en cada caso. Priorizamos la 
            comunicación clara y constante con nuestros clientes, asegurando
            que comprendan cada etapa del proceso legal. Utilizamos herramientas
            tecnológicas avanzadas para agilizar trámites y mantenernos 
            actualizados en las últimas normativas. Nuestro equipo colabora 
            de manera interdisciplinaria, combinando experiencia en diversas 
            áreas del derecho para ofrecer soluciones integrales.`);
        $(".dropdown1").width(1500);
        $(".dropdown1").height(170);
        $("#FAQ").height(400);
        isExpanded = true;
    } else {
        // Restaura a como estaba antes todo
        $(".q").text(`¿Cómo trabajamos?`);
        $(".dropdown1").width("");
        $(".dropdown1").height("");
        $("#FAQ").height("");
        isExpanded = false;
    }
});

$(".dropdown2").click(() => {
    if (!isExpanded2) {
        $(".q2").text(`Nuestro bufete tiene su sede principal, desde donde
            atendemos a clientes tanto de manera presencial como virtual. 
            Contamos con una infraestructura moderna y accesible, diseñada 
            para garantizar la comodidad y privacidad de quienes nos visitan. 
            Además, gracias a las plataformas digitales, ofrecemos asesoría
            en línea para clientes en otras ubicaciones geográficas.`);
        $(".dropdown2").width(1500);
        $(".dropdown2").height(170);
        $("#FAQ").height(400);
        isExpanded2 = true;
    } else {
        $(".q2").text(`¿Con quién trabajamos?`);
        $(".dropdown2").width("");
        $(".dropdown2").height("");
        $("#FAQ").height("");   
        isExpanded2 = false;
    }
});

$(".dropdown3").click(() => {
    if (!isExpanded3) {
        $(".q3").text(`Somos un equipo de abogados altamente cualificados, 
            con años de experiencia en el ejercicio del derecho. Nos 
            apasiona la justicia y nos dedicamos a defender los intereses de nuestros
            clientes con profesionalismo y dedicación. Cada miembro de nuestro 
            bufete aporta una especialización única, lo que nos permite 
            abordar casos complejos desde múltiples perspectivas.`);
        $(".dropdown3").width(1500);
        $(".dropdown3").height(170);
        $("#FAQ").height(400);
        isExpanded3 = true;
    } else {
        $(".q3").text(`¿Quiénes somos?`);
        $(".dropdown3").width("");
        $(".dropdown3").height("");
        $("#FAQ").height("");
        isExpanded3 = false;
    }
});

$(".dropdown4").click(() => {
    if (!isExpanded4) {
        $(".q4").text(`Trabajamos con una amplia gama de clientes, desde particulares
            hasta pequeñas y medianas empresas, así como grandes corporaciones. 
            Atendemos casos de derecho civil, mercantil, laboral, penal y familia, 
            adaptándonos a las necesidades específicas de cada uno. También colaboramos 
            con otros profesionales, como peritos, consultores y notarios, para 
            brindar un servicio completo.`);
        $(".dropdown4").width(1500);
        $(".dropdown4").height(170);
        $("#FAQ").height(400);
        isExpanded4 = true;
    } else {
        $(".q4").text(`¿Dónde estamos?`);
        $(".dropdown4").width("");
        $(".dropdown4").height("");
        $("#FAQ").height("");
        isExpanded4 = false;
    }
});


})





