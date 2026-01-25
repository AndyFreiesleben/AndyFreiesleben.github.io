

function Start() {
	var todo="<h1>Herzlich willkommen!</h1> <h2>Friseurmeister Andy Freiesleben und sein Team im Friseursalon im Zugwaggon freuen sich auf Ihren Besuch!<br>"; 
	todo=todo+ "Wir bieten Ihnen:</h2><ul><li>Den perfekten Haarschnitt</li><li>Meisterhaftes Barbieren</li>";
	todo=todo+ "<li>Professionelle Kopfmassagen</li><li>Eventfrisieren</li><li> Einen Kaffee f&uuml;r jeden, der lieb fragt</li> </ul>";
	todo=todo+"<img src='images/salon.jpg' alt='Telefon' width=60%>";
	var change=	document.getElementById('main');
	change.innerHTML=todo;
 }

document.getElementById('start').addEventListener ('click', Start, true);
Start();


function Kontakt() {
	var todo="<h2>Um einen Friseurtermin zu vereinbaren, rufen Sie einfach unter folgender Nummer an:<br> <a href='tel:+4979439447607'>07943 / 9447607</a></h2><br>     <img src='images/salon.jpg' alt='Telefon' width=60%>"
	var change=	document.getElementById('main');
	change.innerHTML=todo;
 }

document.getElementById('kontakt').addEventListener ('click', Kontakt, true);



function Haltestelle() {
	var todo="<div align='center'>  <h2>Der Salon befindet sich in der Hauptstr. 62, 74249 Jagsthausen.</h2><br><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2601.2847979363974!2d9.460901315690348!3d49.30888997933421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479815fdf92c505f%3A0xc98e6d7deb5f0c2d!2sHauptstra%C3%9Fe%2062%2C%2074249%20Jagsthausen!5e0!3m2!1sde!2sde!4v1582464599309!5m2!1sde!2sde' width='600' height='450' frameborder='1' style='border:1;' allowfullscreen=''></iframe></div>"
	var change=	document.getElementById('main');
	change.innerHTML=todo;
 }

document.getElementById('anfahrt').addEventListener ('click', Haltestelle, true);



function Fahrplan() {
	var todo="<center> <h2>Der Salon ist zu folgenden Zeiten ge&ouml;ffnet:</h2><font size='4'><br><table class='tg' border=2>";		
	todo=todo + "<tr> <th class='tg-nv0v'>Wochentag</th><th class='tg-7khl'>Vormittag</th> <th class='tg-031e'>Nachmittag</th></tr>";
	todo=todo + "<tr> <td class='tg-nv0v'>Montag</td><td class='tg-7khl' colspan='1'>8:00 bis 12:00 Uhr</td>  <td class='tg-031e'>13:00 bis 18:00 Uhr</td> </tr>";
	todo=todo + "<tr>    <td class='tg-nv0v'>Dienstag</td>    <td class='tg-7khl' colspan='2'>6:00 bis 15:00 Uhr</td> </tr>";
	todo=todo + "<tr>    <td class='tg-nv0v'>Mittwoch</td>    <td class='tg-7khl' colspan='2'>6:00 bis 15:00 Uhr</td>  </tr>";
	todo=todo + "  <tr>    <td class='tg-nv0v'>Donnerstag</td>    <td class='tg-7khl' colspan='2'>13:00 bis 22:00 Uhr</td>    </tr>";
	todo=todo + "  <tr>    <td class='tg-nv0v'>Freitag</td>    <td class='tg-7khl' colspan='1'>8:00 bis 12:00 Uhr</td><td class='tg-7khl' colspan='1'>13:00 bis 18:00 Uhr</td>  </tr>";
	todo=todo + "  <tr>    <td class='tg-nv0v'>Samstag</td>    <td class='tg-7khl' colspan='2'>Events nach Vorank&uuml;ndigung<br></td>  </tr></table></font></center>"
	var change=	document.getElementById('main');
	change.innerHTML=todo;
 }

document.getElementById('offen').addEventListener ('click', Fahrplan, true);