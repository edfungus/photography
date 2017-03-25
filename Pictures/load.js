var loadPictures = function (url) {
var htmlArr = [];
var html = '';
var route = url.split('/');
if (route[3] == '') {
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/IMG_0568-Edit.jpg height='600px' width='900px' class='image'/>";
}else if (route[3] == 'people') {
html = "<div class='titlePage'><div class='titlePageTitle'>people</div>"+
"<div class='titlePageText'>girls boys bodies faces</div><div class='titlePageBg'></div></div>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/011.jpg background-color='coral' height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/0111.jpg background-color='coral' height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/01111.jpg background-color='coral' height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/11169714_10152839119612781_2022892800613510981_o.jpg background-color='coral' height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/a.jpg background-color='coral' height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/a0.jpg background-color='coral' height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/a1.jpg background-color='coral' height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/a2.jpg background-color='coral' height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/a4.jpg background-color='coral' height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/a5.jpg background-color='coral' height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/a6.jpg background-color='coral' height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/a7.jpg background-color='coral' height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/b.jpg background-color='coral' height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/d.jpg background-color='coral' height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/d1.jpg background-color='coral' height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/d2.jpg background-color='coral' height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/f.jpg background-color='coral' height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/g.jpg background-color='coral' height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/h.jpg background-color='coral' height='600px' width='819px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/j.jpg background-color='coral' height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/k.jpg background-color='coral' height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/l.jpg background-color='coral' height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/m.jpg background-color='coral' height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/n.jpg background-color='coral' height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/o.jpg background-color='coral' height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/p.jpg background-color='coral' height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/q.jpg background-color='coral' height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/r.jpg background-color='coral' height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/s.jpg background-color='coral' height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/t.jpg background-color='coral' height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/v.jpg background-color='coral' height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/w.jpg background-color='coral' height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/x.jpg background-color='coral' height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/people/y.jpg background-color='coral' height='600px' width='390px'class='image'/>";
} else if (route[3] == 'things') {
html = "<div class='titlePage'><div class='titlePageTitle'>things</div>"+
"<div class='titlePageText'>basically everything but people</div><div class='titlePageBg'></div></div>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/things/a.jpg height='600px' width='900px'class='image'/>";
} else if (route[3] == 'film') {
html = "<div class='titlePage'><div class='titlePageTitle'>film</div>"+
"<div class='titlePageText'>made with an olympus om-1 and light</div><div class='titlePageBg'></div></div>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/film/a.jpg height='600px' width='888px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/film/b.jpg height='600px' width='888px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/film/d.jpg height='600px' width='401px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/film/e.jpg height='600px' width='908px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/film/f.jpg height='600px' width='921px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/film/g.jpg height='600px' width='888px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/film/h.jpg height='600px' width='888px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/film/i.jpg height='600px' width='405px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/film/j.jpg height='600px' width='888px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/film/k.jpg height='600px' width='888px'class='image'/>";
} else if (route[3] == 'clients') { if (route[4] == null) {
html = "<div class='titlePage'><div class='titlePageTitle'>clients</div>"+
"<div class='titlePageText'>you are all amazing</div><div class='titlePageBg'></div></div>";
html = html + "<div class='clientCard image'><a href='./clients/SPARKIxi'><span class='emptyBuffer'></span></a><div class='clientBanner'></div><div class='clientName'>SPARK Ixi</div><img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/a-SPARK%20Ixi.jpg height='600px' width='300'></div>"
html = html + "<div class='clientCard image'><a href='./clients/SPARKLexi'><span class='emptyBuffer'></span></a><div class='clientBanner'></div><div class='clientName'>SPARK Lexi</div><img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/a-SPARK%20Lexi.jpg height='600px' width='300'></div>"
html = html + "<div class='clientCard image'><a href='./clients/SPARKAlayna'><span class='emptyBuffer'></span></a><div class='clientBanner'></div><div class='clientName'>SPARK Alayna</div><img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/b-SPARK%20Alayna.jpg height='600px' width='300'></div>"
html = html + "<div class='clientCard image'><a href='./clients/SPARKCouples'><span class='emptyBuffer'></span></a><div class='clientBanner'></div><div class='clientName'>SPARK Couples</div><img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/b-SPARK%20Couples.jpg height='600px' width='300'></div>"
html = html + "<div class='clientCard image'><a href='./clients/SPARKSeniorDesign'><span class='emptyBuffer'></span></a><div class='clientBanner'></div><div class='clientName'>SPARK Senior Design</div><img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/b-SPARK%20Senior%20Design.jpg height='600px' width='300'></div>"
html = html + "<div class='clientCard image'><a href='./clients/UFG&Katherine'><span class='emptyBuffer'></span></a><div class='clientBanner'></div><div class='clientName'>UFG & Katherine</div><img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/b-UFG%20&%20Katherine.jpg height='600px' width='300'></div>"
html = html + "<div class='clientCard image'><a href='./clients/Spectrum2014FashionShow'><span class='emptyBuffer'></span></a><div class='clientBanner'></div><div class='clientName'>Spectrum 2014 Fashion Show</div><img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/c-Spectrum%202014%20Fashion%20Show.jpg height='600px' width='300'></div>"
html = html + "<div class='clientCard image'><a href='./clients/Sarah'><span class='emptyBuffer'></span></a><div class='clientBanner'></div><div class='clientName'>Sarah</div><img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/d-Sarah.jpg height='600px' width='300'></div>"
html = html + "<div class='clientCard image'><a href='./clients/UFG&EssentialOliver'><span class='emptyBuffer'></span></a><div class='clientBanner'></div><div class='clientName'>UFG & Essential Oliver</div><img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/d-UFG%20&%20Essential%20Oliver.jpg height='600px' width='300'></div>"
html = html + "<div class='clientCard image'><a href='./clients/Nick'><span class='emptyBuffer'></span></a><div class='clientBanner'></div><div class='clientName'>Nick</div><img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/e-Nick.jpg height='600px' width='300'></div>"
html = html + "<div class='clientCard image'><a href='./clients/Contour2012FashionShow'><span class='emptyBuffer'></span></a><div class='clientBanner'></div><div class='clientName'>Contour 2012 Fashion Show</div><img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/f-Contour%202012%20Fashion%20Show.jpg height='600px' width='300'></div>"
} else { if (route[4] == 'Contour2012FashionShow') {
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Contour2012FashionShow/a.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Contour2012FashionShow/b.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Contour2012FashionShow/d.jpg height='600px' width='556px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Contour2012FashionShow/e.jpg height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Contour2012FashionShow/ee.jpg height='600px' width='389px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Contour2012FashionShow/f.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Contour2012FashionShow/g.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Contour2012FashionShow/h.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Contour2012FashionShow/i.jpg height='600px' width='900px'class='image'/>";
} else if (route[4] == 'Nick') {
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Nick/a.jpg height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Nick/b.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Nick/c.jpg height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Nick/d.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Nick/e.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Nick/f.jpg height='600px' width='400px'class='image'/>";
} else if (route[4] == 'Sarah') {
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Sarah/IMG_5992-Edit-2.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Sarah/IMG_7165-Edit.jpg height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Sarah/IMG_7188-Edit.jpg height='600px' width='819px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Sarah/IMG_7287.jpg height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Sarah/IMG_7291.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Sarah/IMG_7307-Edit.jpg height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Sarah/IMG_7367.jpg height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Sarah/IMG_7450.jpg height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Sarah/IMG_7515.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Sarah/IMG_7695.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Sarah/IMG_7714.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Sarah/IMG_7723-Edit.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Sarah/IMG_7727.jpg height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Sarah/IMG_7783.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Sarah/IMG_7817.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Sarah/IMG_7873.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Sarah/IMG_7875.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Sarah/IMG_7886.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Sarah/IMG_7895.jpg height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Sarah/IMG_7897.jpg height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Sarah/IMG_8001.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Sarah/IMG_8030-Edit.jpg height='600px' width='390px'class='image'/>";
} else if (route[4] == 'SPARKAlayna') {
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKAlayna/a.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKAlayna/b.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKAlayna/c.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKAlayna/d.jpg height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKAlayna/e.jpg height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKAlayna/f.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKAlayna/g.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKAlayna/h.jpg height='600px' width='400px'class='image'/>";
} else if (route[4] == 'SPARKCouples') {
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKCouples/a.jpg height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKCouples/b.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKCouples/c.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKCouples/d.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKCouples/e.jpg height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKCouples/f.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKCouples/g.jpg height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKCouples/h (1).jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKCouples/h (3).jpg height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKCouples/h (4).jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKCouples/h (6).jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKCouples/h (7).jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKCouples/i.jpg height='600px' width='900px'class='image'/>";
} else if (route[4] == 'SPARKIxi') {
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKIxi/011.jpg height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKIxi/0111.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKIxi/01111.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKIxi/011115.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKIxi/011116.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKIxi/10353370_10152839108627781_3637006869249601774_o.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKIxi/11008585_10152839109682781_1203649499239212965_o.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKIxi/11036795_10152839110012781_5236488374916521699_o.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKIxi/11053876_10152839109407781_7684503376382431955_o.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKIxi/11169714_10152839119612781_2022892800613510981_o.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKIxi/1941396_10152839109097781_6121549220310565565_o.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKIxi/a.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKIxi/a11.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKIxi/a111.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKIxi/a1111.jpg height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKIxi/a111111.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKIxi/b.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKIxi/b1.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKIxi/b2.jpg height='600px' width='400px'class='image'/>";
} else if (route[4] == 'SPARKLexi') {
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKLexi/01.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKLexi/02.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKLexi/10271373_10152861898282781_3246431562703845287_o.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKLexi/11149789_10152861898602781_1620200259555798777_o.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKLexi/11164686_10152861898742781_1188131078018218103_o.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKLexi/11181247_10152861898957781_1287898901997768367_o.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKLexi/11194559_10152861898837781_8420299821394851548_o.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKLexi/IMG_4577.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKLexi/IMG_4657.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKLexi/IMG_4712.jpg height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKLexi/IMG_4726.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKLexi/IMG_4737.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKLexi/IMG_4761.jpg height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKLexi/IMG_4769.jpg height='600px' width='400px'class='image'/>";
} else if (route[4] == 'SPARKSeniorDesign') {
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKSeniorDesign/11168580_10152861901607781_1292744547681920183_o.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKSeniorDesign/11174324_10152861901762781_2237474410866436708_o.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKSeniorDesign/11174485_10152861901187781_5117171887077876172_o.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/SPARKSeniorDesign/11174580_10152861900732781_958755750268497351_o.jpg height='600px' width='400px'class='image'/>";
} else if (route[4] == 'Spectrum2014FashionShow') {
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Spectrum2014FashionShow/a.jpg height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Spectrum2014FashionShow/b.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Spectrum2014FashionShow/c.jpg height='600px' width='900px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Spectrum2014FashionShow/d.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Spectrum2014FashionShow/e.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Spectrum2014FashionShow/f.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Spectrum2014FashionShow/g.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Spectrum2014FashionShow/h.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Spectrum2014FashionShow/i.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Spectrum2014FashionShow/j.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Spectrum2014FashionShow/k.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Spectrum2014FashionShow/l.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Spectrum2014FashionShow/m.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Spectrum2014FashionShow/n.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Spectrum2014FashionShow/o.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Spectrum2014FashionShow/p.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Spectrum2014FashionShow/q.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/Spectrum2014FashionShow/r.jpg height='600px' width='400px'class='image'/>";
} else if (route[4] == 'UFG&EssentialOliver') {
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/UFG&EssentialOliver/a.jpg height='600px' width='800px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/UFG&EssentialOliver/b.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/UFG&EssentialOliver/c.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/UFG&EssentialOliver/d.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/UFG&EssentialOliver/e.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/UFG&EssentialOliver/f.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/UFG&EssentialOliver/g.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/UFG&EssentialOliver/h.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/UFG&EssentialOliver/i.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/UFG&EssentialOliver/j.jpg height='600px' width='400px'class='image'/>";
} else if (route[4] == 'UFG&Katherine') {
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/UFG&Katherine/a.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/UFG&Katherine/b.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/UFG&Katherine/c.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/UFG&Katherine/d.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/UFG&Katherine/e.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/UFG&Katherine/f.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/UFG&Katherine/g.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/UFG&Katherine/h.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/UFG&Katherine/i.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/UFG&Katherine/j.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/UFG&Katherine/k.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/UFG&Katherine/l.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/UFG&Katherine/m.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/UFG&Katherine/n.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/UFG&Katherine/o.jpg height='600px' width='400px'class='image'/>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/clients/UFG&Katherine/p.jpg height='600px' width='400px'class='image'/>";
} else { /*404 page*/
html = "<div class='titlePage'><div class='titlePageTitle'>page not found</div>"+
"<div class='titlePageText'>oops, nothing to see here<br><br><br><a href='/'>/home/</a></div><div class='titlePageBg'></div></div>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/IMG_7287.jpg height='600px' width='900px' class='image'/>";
}}
} else if (route[3] == 'about') {
html = "<div class='titlePage'><div class='titlePageTitle'>about</div>"+
"<div class='titlePageText'>hi, how are you?</div><div class='titlePageBg'></div></div>"+
"<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/IMG_9957.jpg height='600px' wdith='300px' class='image'/>"+
"<div id='Aboutme'><div class='paragraph'>"+
"Edmund is a photographer based in Austin and Dallas Texas USA. He has won multiple photography awards and is always ready to explore new inspirations. Feel free to contact him for contract/personal work and collaborations. "+
"</div>";
} else {
html = "<div class='titlePage'><div class='titlePageTitle'>page not found</div>"+
"<div class='titlePageText'>oops, nothing to see here<br><br><br><a href='/'>/home/</a></div><div class='titlePageBg'></div></div>";
html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/IMG_7287.jpg height='600px' width='900px' class='image'/>";
}var loading = document.getElementById('Epiloadpage');
loading.parentNode.removeChild(loading);
$('#Prologue').after(html);
}