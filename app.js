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
})





