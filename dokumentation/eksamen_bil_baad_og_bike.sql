-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Vært: 127.0.0.1
-- Genereringstid: 07. 10 2018 kl. 11:42:06
-- Serverversion: 5.6.24
-- PHP-version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eksamen_bil_baad_og_bike`
--

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `artikel`
--

CREATE TABLE `artikel` (
  `id` int(11) NOT NULL,
  `titel` varchar(50) NOT NULL,
  `tekst` text NOT NULL,
  `dato` datetime NOT NULL,
  `visningsantal` int(11) NOT NULL DEFAULT '0',
  `FK_kategori` int(11) NOT NULL,
  `FK_bruger` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Indeholder alle artikler til sitet';

--
-- Data dump for tabellen `artikel`
--

INSERT INTO `artikel` (`id`, `titel`, `tekst`, `dato`, `visningsantal`, `FK_kategori`, `FK_bruger`) VALUES
(1, 'Småt er godt – endelig er den her', '<p>Ford har store planer med den nye Ford Fiesta- serie, som ikke kun skal sælges i Europa, men også i USA.</p><p>Den nye Ford Fiesta-serie var en af stjernerne på Geneve udstillingen, der lyste kraftigt op på den store Ford stand. Den er baseret på den tidligere viste prototype Verve og kommer til salg i løbet af året herhjemme. Til næste år skal den samme modelserie som sedan indtage det store marked i Nordamerika. Designchef Peter Horbury er sikker på, at mindre biler går en stor fremtid i møde, også i Nordamerika efter mange års mere eller mindre mærkværdig modelstrategi fra de såkaldte tre store i USA, GM, Ford og Chrysler. Amerikanerne er begyndt at tage ved lære af europæerne med de stigende oliepriser og mindre biler, mener han.&nbsp;</p><p>- Small is beautiful - at last, som han udtrykte det, under en samtale. Småt er godt - endelig.&nbsp;</p><h4><strong>Og han fortsatte:&nbsp;</strong></h4><p>- Alt er grønt med mindre biler og en del spændende ny teknologi. Jeg tror, kunderne i USA efterhånden har samme opfattelse, og jeg er sikker på, at de vil synes om den nye Fiesta, ligesom jeg er sikker på, at Ford vil tjene gode penge på modellen.&nbsp;</p><p>Ford har aldrig introduceret Focus Mark II i Nordamerika, som er blevet en stor succes i Europa, af frygt for at den ville blive for dyr. De er fortsat med den første Focus i ret skrabede udstyrsversioner, men med den nye Fiesta ser tingene anderledes ud, udtaler han. Den bliver udstyret med iPod og alt andet nyt såsom navigation og MP3 i topversionerne, samt hele sikkerhedspakken i alle modeller.&nbsp;</p><p>Peter Horbury, 57, engelsk født, er uddannet på London College of Art, og har blandt andet arbejdet hos Ford, hvor han var med til at designe Escort og Sierra, derefter i 11 år hos Volvo, hvor han udviklede designet til modellerne S40/V50, S60/S80 og XC90, der er blevet meget rost. Han blev hædret som bedste designer i Storbritannien i 1998.&nbsp;</p><p>I dag er han ansvarlig for Fords design i Nordamerika, med modellerne Lincoln og Mercury. Horbury bor i Detroit.</p>', '2018-10-06 17:53:13', 0, 1, 5),
(2, 'General Motors svarer igen', '<p>Om et par år er General Motors klar med hybrid-teknologi med nye batterityper, der forlænger bilernes aktionsradius mere end tre gange.&nbsp;</p><h4><strong>Miljøbiler&nbsp;</strong></h4><p>General Motors har alt for længe set stiltiende på, at blandt andet Toyota og Honda sælger hybridbiler, men nu slår GM tilbage. Det sker blandt andet med den lille smarte Volt, som blev præsenteret i Detroit sidste år under stor festivitas, samt med en ny Saab 9-X, ligesom GM og Ford begge satser enormt på ethanol i benzinen i USA. På dette punkt er man i dag langt foran japanerne, der først lige er begyndt at interessere sig for den nye blandede benzin. GM er også langt fremme med diesel-hybrid i konceptmodellen Flextreme, som blandt andet stod i Geneve for nogle uger siden.&nbsp;</p><p>Her præsenterede chef Rick Wagoner samtidig anden generation af de ny Lithium-Ion batterier. Det er samme batteriudvikling som i mobiltelefoner. De har mindst tre gange længere aktionsradius end almindelige batterityper. De nye batterier kommer først ned i den nye Saab 9-X fra 2010. Det er planen, at fremstille mindst 100.000 Saab 9-X årligt, der sparer på brændstoffet, og loves et benzingennemsnit på 20,4 kilometer med et CO2 udslip på kun 117 g/km fra en mindre motor.&nbsp;</p><h4><strong>Stor interesse for Volt&nbsp;</strong></h4><p>GM vil fremstille cirka 10.000 af den lille Chevrolet Volt i 2010, og derefter højere styktal i de efterfølgende år. Efter lanceringen sidste år i Detroit fik GM så mange henvendelser fra interesserede kunder, at det nærmest overstiger alle andre nyhedspræsentationer i nyere tid, som en GM medarbejder udtrykte det i Detroit i år.&nbsp;</p><p>Også flere tusinde mails fra Europa viser, at interessen for hybrid ikke kun er den lille niche, som flere europæiske bil-topchefer troede for nogle år siden.&nbsp;</p><p>Det var småt med tekniske informationer sidste år, men de foreligger nu. Med Lithium-Ion batterier er bilens aktionsradius altså mindst tre gange længere end almindelige batterier, som de kendes i dag, og som hjælpemotor, til de store afstande i USA eller i Europa, bliver Volt udstyret med en lille trecylindret benzinturbomotor, der yder 160 hk og klarer 0-100 kilometer i timen på cirka 8,0 sekunder, med en topfart på cirka 190 kilometer i timen. Med en 55 liters tank er der nok batterieffekt og brændstof til cirka 1000 kilometers kørsel før optankning. Genopladningen af batterierne sker fra et almindeligt strømudtag, og varer seks timer.&nbsp;</p><p>Prisen loves på linie med en mellemklassebil i dag. Næste trin på Volt udviklingsstigen bliver solarenergi og brændselscelle med brint, men det har længere udsigter.</p>', '2018-10-04 21:37:46', 0, 1, 2),
(3, 'Nissan-finansiering skærer i prisen', '<p>Med en anderledes finansieringsform af nye biler vil for eksempel en Nissan X-Trail på hvide plader, med en nybilpris på omkring 400.000 kroner, kunne erhverves med under det halve til udbetaling og godt halvdelen af den månedlige ydelse i forhold til et traditionelt lån, oplyser Nissan i en meddelelse.&nbsp;</p><p>En Nissan X-Trail koster med metallak 417.717 kroner, som nu kan levere med en udbetaling på kun 36.000 kroner, inklusive oprettelsesomkostninger, til en månedlig ydelse før skat på 3.595 kroner, efter skat 2.972 kroner.&nbsp;</p><p>En traditionel finansiering med billån vil løbe op i 83.554 kroner i udbetaling og en månedlig ydelse på 5.516 kroner.&nbsp;</p><p>Nissan oplyser videre, at efter tre år og maksimalt 60.000 kilometer kan bilen leveres tilbage til Nissan, hvis kunden ønsker det, eller kunden kan fortsætte sin månedlige betaling i den resterende løbetid og beholde bilen. Tilbuddet er en kampagnepris, der gælder til 30. juni i år og er baseret på det nuværende renteniveau, og det tilbydes hos udvalgte forhandlere, skriver Nissan.</p>', '2018-10-06 17:55:29', 0, 1, 2),
(4, 'Kongen blandt sportsvogne tilbage', '<p>I hjemlandet USA kaldes Corvette ”King of the Hill” - ZR1 har fået super højt drejningsmoment, dobbeltkobling, sekstrins close-ratio transmission samt helt ny undervogn og affjedring.&nbsp;</p><p>Corvette ZR1 er noget af en bil for entusiaster, der endnu engang har taget de andre på sengen med en helt ny LS9 6.2 liters V8-motor, der yder over 600 hk med et drejningsmoment på hele 823 Newtonmeter.&nbsp;</p><p>Det er sikkert baggrunden for den nye models fornemme titel i hjemlandet, ”King of the Hill” med det super høje drejningsmoment, dobbeltkobling, sekstrins close-ratio transmission, helt ny undervogn og affjedring med Magnetic Selective Ride Control, 19” hjul foran, og 20” bagunder med dækstørrelsen 285/30 ZR19 foran og 335/25 ZR20 bag, med specielt udviklede Michelin Pilot Sport til den ny amerikanske sportsvogn.&nbsp;</p><p>Bremseskiverne er i kulfiber, keramik og større end tidligere. I det hele taget er bilen opbygget som mere eller mindre end racerbil til banerne med nye lette materialer for og bag, såsom specielle polycarbonat ruder, en ny spoiler, der hæves ved højere hastigheder samt head-up display i forruden.&nbsp;</p><p>Bilen kører 370 kilometer på toppen, og den vejer kun 1.519 kg. Det er den hurtigste bil, General Motors har fremstillet i selskabets 100-årige historie.</p><p>Det var store ord, der blev brugt forleden ved introduktionen i Detroit.&nbsp;</p><p>- Kongen er vendt tilbage, sagde Chevrolets direktør Ed Pepper, og han fortsatte:&nbsp;</p><p>- Det nye ZR1 er det ypperste, en amerikansk superbil kan give, med værdier der overtrumfer andre eksotiske biler, som måske koster to til fire gange mere.&nbsp;</p><p>De første test har vist, at den nye Corvette også overtrumfer den højt respekterede Corvette Z06, kendt fra banerne. Corvette lover en topfart på 325-330 kilometer, men gearingen afgør dette. Effekt-vægtforholdet er bedre end Porsche GT2, Ferrari 599 og selv Lamborghini LP640.</p>', '2018-10-06 17:52:51', 0, 1, 3),
(5, 'Seat Leon Van tordner frem', '<p>Sidste års afgiftsændring, der tog livet af de tunge firehjulstrækkere, har betydet at de mindre gul-pladebiler som for eksempel Seat Leon Van tordner frem. I januar måned kom Leon Van ud med knap 21 procent markedsandel i segmentet for varebiler op til 2.000 kilogram og blev den mest solgte varebil til private.&nbsp;</p><p>Fra Seat-importøren fortæller pressechef Tonny Soltau, at salget af Leon Van i øvrigt er meget polariseret. Enten vælger køberne de vilde powervans 240 hk Cupra eller 170 hk FR TDI, eller også går de målrettet efter den nye pendlerbil 1.9 TDI Ecomotive Van.&nbsp;</p><p>- Ud fra en ren CO2-reducerende betragtning er der en stor her-og-nu miljøgevinst for samfundet ved at købe de mindre og energieffektive dieselbiler, som for eksempel Leon Ecomotive Van. Denne van-model, med fuld sikkerhedspakke og 1.200 liter varerum til under 154.000 kroner inklusive moms, udleder kun 119 gram CO2 og 0,0005 gram partikelmasse per kilometer, siger Tonny Soltau.</p>', '2018-10-06 17:53:47', 0, 1, 3),
(6, 'Fremtidens Supermateriale: Nanorør', '<p>Der er tale om et ægteskab, som for os bådfolk er mere sensationelt end Brad Pitts og Angelina Jolies. Kulfiberen har mødt nanoteknologien, og hed musik er opstået. Nanorør er nu jordens stærkeste og letteste materiale. Og det er på vej frem. Smag på ordet – om kort tid er det på alles læber!&nbsp;</p><p>Sejlbåde i den dyre ende har længe været bygget af kulfiber fra top til tå – ikke kun skrog og dæk, men også mast, bom og sejl. Men kulfiberlaminaterne er også på vej ind i ganske almindelig bådproduktion, i takt med at priserne falder, og brugen bliver velkendt. Nanoteknologi er et andet af tidens ”buzzwords”. Det handler om at ændre molekyle-strukturen og dermed egenskaberne i alverdens materialer, altså helt nede på et niveau hvor der arbejdes i milliontedel millimeter. Nanoteknologi bruges foreløbig mest til overfladebehandling og har endnu ikke haft nogen stor betydning for bådbranchen. Men alt tyder på at både kulfiber og nanoteknologi vil få langt større og mere vidtgående konsekvenser i de kommende år. Ikke mindst fordi de to nu har mødt hinanden og indgået et sensationelt ægteskab. Navnet er nanorør.&nbsp;</p><h4><strong>Milliontedel millimeter&nbsp;</strong></h4><p>Nanorør er, som navnet antyder, mikroskopiske, hule cylindre. De er lavet af kulstof, altså samme substans som kulfiber, bare i en anden struktur. Diameteren er under en milliontedel millimeter, og længden er nogle få mikro (en mikro er en milliontedel meter). De ligner støv, så små er de. Og hvad der er ret interessant for os sejlere: De danner basis for det suverænt stærkeste og letteste materiale, menneskeheden nogensinde har frembragt. Sammenligner man et laminat af nanorør med et tilsvarende stykke stål, vejer stålet seks gange mere. Og styrken? Vel, hold fast; Nanorør-strukturen er 100 gange stærkere! Nu vil folk med en smule indsigt i fysik ryste lidt på hovedet, for styrke er rent faktisk mange ting. En lidt mere præcis beskrivelse vil være at sige, at kulfiber-nanorør har fantastiske egenskaber, hvad angår strækbelastning og elasticitet. Kompression er ikke materialets livret, selv om resultaterne her også er bedre end det meste andet på markedet.</p>', '2018-10-04 21:38:22', 0, 2, 5),
(7, 'Bryant 190 Bowrider', '<p>Lille og til en konkurrencedygtig pris. Endnu et amerikansk mærke på det danske marked og med bowriders fra 18 til 27 fod. Noget, du kan være helt sikker på, er, at du i en Bryant ikke finder et eneste stykke træ. For bådene er garanteret 100 % fri for træ. &nbsp;</p><p>190-modellen er den mindste i flåden. Det betyder en båd på lidt over 18 fod. Som standard findes en 3 liters MerCruiser på 135 hk i motorrummet. Ikke nogen avanceret motor, men den har kræfter nok og er med til at give en fornuftig pris. Når man ser båden på afstand ved broen, virker det, som om den ligger lidt for højt med agterskibet. Dette forstærkes under sejlads og vidner om, at båden antagelig bør leveres med en noget tungere motor. Typisk amerikansk – for en større motor koster næsten ikke noget ”over there”, og benzinpriserne er lave i forhold til herhjemme.&nbsp;</p><p>Det er en fornuftig båd, hvor du får det, du ser. Her er integreret badeplatform med lejder, agterbænk, to stole og et par siddepladser foran vindspejlet. Båden har pæn indstøbt staffering og blød polstring. Under dørken er stuverum til vandski etc., og midt i bænken foran er der plads til den medfølgende transportable køleboks. Smart detalje! Instrumenterne er placeret i et buet instrumentpanel, og et lille kompas foran rattet er standard. Selve førerpladsen fungerer fint, man sidder godt, og der er vippehynde i forkanten af den formstøbte stol. Man vælger fortrinsvis at sidde med vippehynden oppe. Så ser man lige over vindspejlet. At sejle båden i stående stilling kan man godt glemme, for motorkontrol og rat er placeret til en siddende. Instrumenterne er overskuelige med kontakterne ved siden af rattet. Her er også kontrolpanel til stereoanlægget – selvfølgelig standard med vandtætte højtalere i hver side.&nbsp;</p><p>Når alt kommer til alt, er dette en lille båd. Det skal man tage hensyn til, når man laster den. Det er også vigtigt med korrekt vægtfordeling, og fribordet er ikke særligt højt. Med tanke på det skal man være opmærksom på ikke at sejle ud i for store bølger og ikke med for meget last fremme. At få en ”grøn sø” ind over stævnen er ikke sagen, for båden er ikke selvlænsende. Brugsområdet for denne båd begrænser sig altså til det samme som for en almindelig, åben båd, selvom der medfølger et dækken til at lukke forskibet med. Man får bare lidt mere design og komfort i indretningen med bløde hynder, stole og polstring.&nbsp;</p><h4><strong>Bådens egenskaber&nbsp;</strong></h4><p>Generelt er båden enkelt udstyret – her er, hvad der er brug for til en familietur, når vejret er godt. Båden passer f.eks. til en familie på to voksne og to børn. Med en kraftig motor og friske svingegenskaber vil den være en god trækbåd til vandski og vandlegetøj.&nbsp;</p><p>Den amerikanske producent påstår, at de bruger flere timer på hver enkelt båd end nogen anden producent. Det kan godt være rigtigt. Men der er lidt raslelyde i båden, og den virker kompakt. Man kunne dog godt have lagt nogle flere timer i at gøre lydisoleringen perfekt. For motoren larmer overraskende meget.&nbsp;</p><p>Der var krap sø og bølger på omkring en meter på vores testtur. Planingstærsklen er lav, og båden kommer hurtigt i fart, virker levende og sjov at sejle. Den svinger let, og lægger man den ind i et maksimalt sving fra høj fart, drejer den på en femøre. Stævnen tager fat, agterskibet slipper og giver et skarpt sving med kraftige G-kræfter.&nbsp;</p><p>Selvfølgelig sejler man ikke sådan på en familietur, men vi blev lidt overstadige og susede af sted mod fotobåden. En levende hop- og sprøjt-tur. Med 17 graders V-bund i agterspejlet bliver sejloplevelsen ikke en af de mest behagelige, vi har haft, men holder sig på et niveau, som vi vil betegne som gennemsnitligt. Pludselig må vi erkende, at dette er en forholdsvis lille båd med et moderat fribord fremme. Vi tager en bølgetop ind over stævnen. Og får en ordentlig skylle. Efter at have gentaget manøvren et par gange føler vi ikke behov for at blive mere våde og vender stævnen mod land.&nbsp;</p><p>Vor konklusion er, at Bryant 190 er en konkurrencedygtig båd med hensyn til prisen. Den virker godt bygget og har gode fartegenskaber. Men man skal ikke tage ud i for store bølger med den. Vi var kun to personer i båden under testsejladsen. Har man hele familien og bagage om bord, er det endnu vigtigere at passe på bølgehøjden. Det gælder også, hvis man skal over store hæksøer. Båden er slet og ret ikke større, end den er, og uden fordæk skal man tage de samme forholdsregler som i en helt åben båd.&nbsp;</p><p>Længde/bredde: 5,80/2,45 m&nbsp;<br>Vægt: 1.245 kg&nbsp;<br>Maks. personer: 7 stk.&nbsp;<br>Motor, standard/testbåd: 135/135 hk&nbsp;<br>Brændstoftank: 120 l&nbsp;<br>CE-kategori: C&nbsp;<br>Pris fra/testbåd: 199.900 / 216.900 kr.&nbsp;<br>Producent: Bryant Boats&nbsp;<br>Importør: Køge Trolling Center, tlf. 56 63 01 00, www.k-t-c.dk&nbsp;</p><p>+ Konkurrencedygtig pris&nbsp;<br>+ Virker velbygget&nbsp;<br>+ Fin trailerbåd&nbsp;</p><p>- Lavt fribord&nbsp;<br>- Den kan blive våd&nbsp;<br>- Skal lastes med fornuft</p>', '2018-10-06 17:44:31', 0, 2, 4),
(8, 'Nauta motoryacht', '<p>Dobbeltskruet motoryacht fra 1934. Motorbåden ”Nauta” er i dag 73 år og stadig i topform. Som ny i 1934 kostede den 11 m lange båd ”meget mere end en stor villa”. Det siger noget om kvaliteten.&nbsp;</p><p>Alle stopper på kajen og kikker på den fine, gamle motorbåd med lakeret oregonpinedæk og forkromede beslag, mahognikahyt og ulasteligt hvidmalet fribord.&nbsp;</p><p>Havnens naboer til ”Nauta” mener, at den gamle motorbåd er irriterende. For når de hører folk oppe på kajen sige ”Nej, en flot båd,” så håber de, at det er deres egen båd, der menes. Men det er altid gamle ”Nauta”, tilskuere ser på, for træbåden skiller sig meget ud fra hvide glasfiberbåde.&nbsp;</p><p>Inge og Torben Leig Andersen har ejet ”Nauta” siden 1971, altså 36 år. ”Der er af og til folk, der vil købe båden,” siger Torben og Inge muntert. ”Engang for 30 år siden i en sluse på Göta kanalen kom en meget interesseret svensker, der fotograferede båden og ville købe den for 100.000 kr. Vi ville ikke sælge. Straks tilbød han 150.000 kr. Vi ville stadig ikke sælge. Svenskeren kørte i bil fra sluse til sluse efter os og gentog sit tilbud, og i tilgift ville han give en taxa hjem til Danmark.”&nbsp;</p><p>”Nautas” marchfart er 8 knob, hvor dieselforbruget er fornuftigt med 5 liter i timen. Topfarten er ca. 13 knob, men med et brændstofforbrug på 26-27 liter i timen. ”Men vi kan da hurtigt komme af vejen for en færge,” siger Torben.&nbsp;</p><p>”Vi vandt engang et væddemål om, at ”Nauta” kunne trække en vandskiløber. Det kunne hun sagtens, endda en stor en,” ler Torben, ”og jeg vandt en bajer.”&nbsp;</p><p>De foretrækker at sejle på fladt vand uden bølger, men egentlig generer bølger ikke båden meget. ”Det er bare pokkers ubehageligt,” synes Inge.&nbsp;</p><h4><strong>To ”baglæns” motorer&nbsp;</strong></h4><p>Båden er bygget i 1934 som ”dobbeltskruet motoryacht” af spejlskåret kalmarfyr på eg og egesvøb på Bogense Skibsværft.&nbsp;</p><p>Båden havde dengang to skruer og to Albin 4-cylindrede motorer. De stod i hver sin side af agterkahytten, der hvor der nu er en sofa og et skab. For at undgå at motorerne optog plads i cockpittet, var installationen ret avanceret. Motorerne stod ”baglæns” i agterkahytten med drevet vendt fremad, hvor det blev ført lodret ned til skrueakslerne, der gik agterud neden under motorerne. De kørte på traktolin, en blanding af benzin og petroleum.&nbsp;</p><p>De startedes på ren benzin, hvorefter man skiftede over til billigere petroleum. I 1956 fik båden erstattet de to motorer med én ny 6-cylindret Albin motor på 70 hk, også til traktolin. Den blev placeret midtskibs i forkahyttens agterste del, og med en lang skrueaksel under cockpitdørk og bådbund til en stor propel agter. For at få plads til propellen blev egetræs-kølen foran skrue og ror gjort dybere til nuværende 1,2 m dybgang.&nbsp;</p><p>I 1975 fik ”Nauta” den nuværende motor, en Scania Vabis D8 dieselmotor på 156 hk, og den kører stadig fint efter 32 år. Motoren vejer ca. 1.100 kg, så for ikke at trykke forskibet ned blev den flyttet agterud til det naturlige sted, cockpittet. Torbens ældre bror er mekaniker og hjalp med ombytningen. Selv har Torben masser af mekanisk snilde, men får også stadig hjælp af sin bror ”doktor mek.”, der hvert andet år tjekker motoren. Han sætter som et stetoskop en skruetrækker mellem øre og motor og lytter til hver af de seks cylindere, mens motoren kører.&nbsp;</p><h4><strong>Stolt af glasfiber spørgsmål&nbsp;</strong></h4><p>Båden vækker altid opmærksomhed. ”Hvor gammel er den?” er det almindelige spørgsmål. ”73 år,” er svaret i dag.&nbsp;</p><p>Det er næsten altid starten på flere spørgsmål og hyggelige samtaler. ”Et spørgsmål, vi er lidt stolte over at få, er, når nogen siger: Jamen, man byggede da ikke glasfiberbåde i 1934? Så ved vi, at vores arbejde med at male fribordet er gjort godt nok,” siger Torben.&nbsp;</p><p>”Nauta” har også været filmstjerne: ”Under sejlads i Göta kanalen blev vi filmet af et tysk tv-hold, som fulgte båden op ad den store slusetrappe i Mem. Tv-holdet bad os gentage visse manøvrer, så de kunne filme en ekstra gang. Desværre har vi aldrig set optagelserne.”&nbsp;</p><p>De har en fin tilladelse fra 1954 til at føre yachtflag. ”Ha,” siger Torben, ”hvem har sådan en tilladelse i dag?” Dengang skulle hver båd søge om lov til at føre yachtflag (splitflag), men siden 1956 er der generel tilladelse til alle både.&nbsp;</p><h4><strong>Cykler, fisketip og landstrøm&nbsp;</strong></h4><p>Siden ”Nauta” i 1975 fik den nye motor, har de sejlet ca. 30.000 sømil. De er hvert år på sommertur, og de har været i stort set alle danske havne. Desuden i Stockholm, Göta kanalen, på Gotland, ad tyske kanaler til Berlin få år efter murens fald, ad Trave kanalen, i Hannover, på Elben, Kielerkanalen og Ejderen, Slien og to gange ad Dalslands kanal til Norge.&nbsp;</p><p>De bruger minicykler. ”Næst efter kompasset er cyklerne det vigtigste om bord,” siger de. ”Det er tredje hold cykler, vi har nu. For at få plads til en ”cykelkælder” sløjfede vi en lille sofa i agterkahytten.”&nbsp;</p><p>De fisker en del og sætter af og til lidt garn med ruser. Torben overvejede at bygge flybridge på båden, men det passede ikke i stilen, så han nænnede det ikke.&nbsp;</p><p>Det originale porcelæns-wc og håndvasken fra 1934 måtte udskiftes med nyt i 2007. ”Mon den nye wc-pumpe af plast kan holde i 73 år som den gamle af bronze?” tvivler Torben.&nbsp;</p><p>Til landstrøm er der 230 volt stik i hver af de to kahytter og i cockpittet. En god ting med landstrøm er det ”nye” køleskab, som er 16-17 år. Det er af rustfrit stål, 60 liter med et lille fryserum. Det forrige, almindelige køleskab rustede op og var i øvrigt en meget stor strømforbruger.&nbsp;</p><p>Den store motor har et meget stort el-forbrug i startøjeblikket, mens de to startbatteriers kapacitet er lille. Hvis motoren ikke starter inden for ni sekunder, er batterierne tømt. Men motoren starter altid straks. De har dog en meget kraftig oplader, og med den koblet til landstrøm kan den i nødsituation starte motoren.&nbsp;</p><h4><strong>Bådebygger genså sit ”barn”&nbsp;</strong></h4><p>Den dobbeltskruede motoryacht blev bygget i 1934 på Bogense Skibsværft til Herr Direktør H. Rasmussen, Vedbæk, læser man i Skibsregisterets ”Tilsynsbog”. Bådens navn blev ”Mayo”, for H. Rasmussen var direktør for mayonnaisefabrikken Mayo.&nbsp;</p><p>Kun to år efter, i 1936, blev båden solgt og kom i 1937 til Rungsted.&nbsp;</p><p>I 1946 var båden i Århus. Det var jo en bemærkelsesværdig stor båd dengang, og den lå for enden af sin egen bro. Der bemærkede den 9-10 årige Torben båden. Han er fra Århus og var begyndt at sejle i motorbådsklubben, men drømte ikke om, at han senere skulle eje den.&nbsp;</p><p>I 1951 kom ”Nauta” til København for en større renovering af motorerne.&nbsp;</p><p>I 1953 var båden i Køge og hed ”Ulla” et års tid, inden den blev døbt ”Nauta” og kom i Skibsregisteret, og i 1961 kom ”Nauta” så til Snekkersten, hvor Torben og Inge overtog båden i 1971.&nbsp;</p><p>I sommeren 1974 var de i Bogense med ”Nauta”, og om bord kom den dengang 87-årige Eiler Pedersen, ”Bogense-Pedersen”, som byggede båden. Han fortalte, at ”den i 1934 kostede meget mere end en stor villa”. Den gamle bådebygger klappede kærligt båden og sagde: ”Godt at man kan være sine børn bekendt.”&nbsp;</p><p>Han kunne ikke hjælpe med de originale tegninger til båden, for en mindre brand på værftets kontor havde ødelagt næsten alle arkiver. Nylig søsat i 1934 fik båden ”midlertidig godkendelse til indskrænket fart indtil 6 sømil af kysten” af Statens Skibstilsyn. Men følgende skulle findes i båden: Søvejsregler, to pøse, kompas og flag, og ”5 BRT” skulle indhugges i en lugekarm, som det var almindeligt dengang. BRT er bruttoregistertons, et nu forældet rummål for bådens størrelse. En uge efter var de ting i orden, og båden fik den 9. juli 1934 den endelige godkendelse ”til indskrænket fart, dog ikke vest for Skagen.”&nbsp;</p><h4><strong>Anker i fjord og i have&nbsp;</strong></h4><p>Torben begyndte som nævnt som 9-10 årig at sejle. Inge havde kun været i morfaderens pram på Stege Nor. Ellers havde hun ikke sejlet, før hun og Torben havde været gift i 16 år, og de overtog ”Nauta” i 1971. ”Jeg vidste jo ikke, hvad jeg gik ind til,” undskylder Inge tilfreds.&nbsp;</p><p>Ankrene i stævnen havde oprindelig henholdsvis 40 og 60 m galvaniseret kæde. Nu er de to ankre kun til pynt, og de er boltet fast i ankerklyssene. De er nemlig hule kopier smedet i jernplade efter de originale massive 22 kg ankre. Det ene af dem ligger på bunden af Roskilde Fjord, det andet ligger til pynt i Torben og Inges have.&nbsp;</p><p>Inge og Torben er næsten på alder med Nauta, men har slet ingen planer om at ”sluge ankeret”, som man siger om søfolk, der går i land.&nbsp;</p><p>Dobbeltskruet motoryacht ”Nauta” ex ”Ulla” ex ”Mayo”.&nbsp;</p><p>Bygget 1934 på Bogense Skibsværft, som også byggede store fiskekuttere.&nbsp;</p><p>Marchfart/topfart: 8/13 knob&nbsp;<br>Længde/bredde/dybgang: 11,1/3/1,2 m&nbsp;<br>Vægt: 9 t&nbsp;<br>Dieseltanke: 2 x 180 l&nbsp;<br>Vandtanke: 75 + 250 l</p>', '2018-10-06 17:53:32', 0, 2, 4),
(9, 'Hvis nabobåden kommer i klemme', '<p>Hvad gør du, hvis du ser en ubemandet båd i havn i færd med at synke – og hvad har du lov til? Advokaten giver svar.&nbsp;</p><p>Nu er vi så langt henne på året, at de fleste har fået deres båd på land. Enkelte bådejere lader dog båden blive i vandet, og set med de sidste mange års milde vintre er det forståeligt nok. Men under efterårs- og vinterstormene kan der opstå ekstraordinære vind- og vejrforhold, der betyder, at der skal holdes ekstra øje med båden.&nbsp;</p><p>Af og til oplever man den situation, at en båd hænger så voldsomt i sine fortøjninger, at der er overhængende risiko for, at den vil synke. Hvad skal man gøre i denne situation, hvor det ikke kan lade sig gøre at komme i kontakt med bådens ejer – han sidder måske og hygger sig under sydens sol? Skal man skære bådens fortøjninger over, for at undgå at båden synker, uanset at det kan medføre problemer, og hvordan forholder det sig, hvis båden efterfølgende driver over i nabobåden og forvolder skade på denne båd?&nbsp;</p><h4><strong>Det må du&nbsp;</strong></h4><p>I nævnte eksempel er det klart, at hjælperen ikke pådrager sig noget ansvar over for ejeren af den nødstedte båd, som han klipper fortøjningerne over på. Hjælperen sikrer, at båden ikke synker, og ejeren undgår et formuetab. Næste spørgsmål er, om hjælperen kan risikere at blive ansvarlig for andre skader, der eksempelvis pådrages nabo båden.&nbsp;</p><p>Eksemplet rummer en velkendt problemstilling, nemlig retten til at foretage rimelige foranstaltninger, der er nødvendige for at afværge et truende tab, når tredjemand selv er forhindret i at handle. Man taler om uanmodet forretningsførelse eller nødret i de tilfælde, hvor man foretager en handling for at afværge skade på tredjemands ting og derved pådrager denne tredjemand en udgift.&nbsp;</p><h4><strong>Nødret&nbsp;</strong></h4><p>Forudsætningen for at den person, der handler på ejerens vegne, bliver ansvarsfri, er:&nbsp;</p><ul><li>At ejeren selv har været forhindret i at gribe ind</li><li>At handlingen har været forsvarlig, og at den har været nødvendig.</li></ul><p>Er de betingelser opfyldt, er den handlende person ikke ansvarlig for de udgifter, som handlingen påfører ejeren. Ejeren af båden skal derfor erstatte nabobåden, de skader, der bliver påført denne som følge af, at bådens fortøjninger bliver skåret over.</p>', '2018-10-04 21:39:12', 0, 2, 4),
(10, 'Vinterstorm = 25-33 m/s', '<p>En storm har ufattelig kraft. Her genopfrisker vi din fantasi om, hvad der kan ske, og hvad du kan gøre for at skåne båden.&nbsp;</p><p>Det er rystende dagen efter en storm at se en 177 kg tung Wayfarerjolle blæst op fra sin trailer og smidt oven på nabojollen. Tunge tagplader kan også blæse omkring på havnepladsen, og store træer, der har stået trygt i mange år, kan vælte i en vinterstorm.&nbsp;</p><p>Du kan næppe forebygge stormskader, men når stormen først er der, må du forlade din varme stue og se til båden. Måske kan nogle ekstra surringer forebygge skader.&nbsp;</p><h4><strong>Båden i haven&nbsp;</strong></h4><p>Vi kender til en forsigtig bådejer, der har båden vinteroplagt hjemme i haven. Der kom varsel om orkanagtig storm fra nordvest, den værst tænkelige retning for netop den have. I haven er et 20 m højt, tyndt grantræ, der efter tidligere vestlige storme hældede lidt mod øst, og normalt svajede det også rigtig meget i kuling. Nu frygtede bådejeren, at en storm kunne vælte træet ned over båden – et 20 m træ vejer 500-1.000 kg.&nbsp;</p><p>Derfor klatrede han så højt op i træet som muligt, bandt en trosse om stammen og førte trossen til roden af et stærkt træ til luv og strammede op med en talje.&nbsp;</p><p>Træet væltede da heller ikke i stormens vilde sus, og nogle dage efter savede han konsekvent øverste tredjedel af træet af, så det fik mindre vindfang. Det var for risikabelt at fælde hele træet, mens båden stod i haven.&nbsp;</p><p>Stormen væltede motorbåden. En sejlbåd bagved rokkede ned ad sine klodser, men væltede ikke. Den orange jolle fik ved lavvande stævnen under bolværkets bjælke. Så kom storm og højvande. Ejerne kom ikke.&nbsp;</p><p>Efter pålandsstormen 8. januar 2005. Orkanagtige vindstød har kastet den hvide Wayfarerjolle op på nabojollen. Wayfarer’en vejer 177 kg og stod på den tomme trailer bag manden.&nbsp;</p><p>Gamle træer er farlige i storm. Jollen med grøn bund var heldig, en tyk gren stoppede det tonstunge træ en millimeter over jollen. I baggrunden joller, som er smidt rundt af stormen.&nbsp;</p><h4><strong>Husk&nbsp;</strong></h4><p>Inden du går i seng om aftenen er det sidste du gør at tjekke båden. Bor du langt fra båden, så få en ven til at tjekke.&nbsp;</p><p>Det første, du gør næste morgen, er også at tjekke båden og nabobådene og se, om der er skader, der måske kan standses ved en hurtig indsats.&nbsp;</p><h4><strong>Hvad kan du gøre, inden stormen kommer?&nbsp;</strong></h4><ul><li>Du kan lægge 50-100 kg ballast på trailerens aksel og trækstang, f.eks. vanddunke med strandsand bundet sammen to og to til at hænge over akselen.</li><li>Du kan tage masten af, så der er mindre vindfang. Så skades masten heller ikke, hvis båden blæser om.</li><li>Du kan forhindre, at en tynd plastpresenning blafrer for meget ved at lægge en tung, gammel presenning oven på. Den tunge presenning må godt være utæt, det er kun dens vægt, der tæller. Midt i stormen er det næppe muligt at lægge en ekstra presenning på.</li></ul><h4><strong>Hvad kan du gøre, mens stormen raser?&nbsp;</strong></h4><ul><li>Mærker du stormen uden for dine vinduer og ved, at der er pålandsvind, er det tid at gå ned og se til båden.</li><li>Tjek båden på land. Du kender havnens vinterplads og vindretningerne og ved, at stedet er mest udsat ved pålandsvind, hvis den ude fra vandet går rent ind på bådenes vinterplads, mens fralandsvind generer mindre eller slet ikke, når bygninger, bakker og træer giver læ for vinden.</li><li>Tjek båden i vand. Der vil altid være risiko for ekstremt høj- eller lavvande om vinteren, når det blæser, uanset vindretningen.</li><li>Er det mørkt, så tag en lommelygte, tovværk og måske også lidt værktøj med. • Lette joller og flerskrogsbåde på land har stor risiko for at blæse omkuld i pålandsvind. Sur dem stramt til traileren, så dens vægt er med til at holde på båden. Er masten på, så før et fald ud i vindretningen og bind det fast til noget solidt. Prøv ikke at lægge masten ned, mens det stormer. Når du ikke kan holde en avis op mod vinden, så vil en mast antagelig blæse fra dig.</li><li>Blafrer presenningen, kan den sikres ved at stramme linerne og hænge flere tunge vægte på dem. Kast evt. tunge trosser hen over båden og stram ned. Kast i medvind, ellers lykkes det ikke.</li><li>Giver presenningen for stort vindfang, er det antagelig for sent at pille den af midt i stormen. Hvis den fyldes af et stormpust, har du ingen chance for at holde den nede, og måske brager den over i en nabobåd, der herved får et for stort vindfang.</li><li>Basker nabobådens presenning i vinden, så båden truer med at vælte over i din båd, så gør noget, eller ring straks til naboen.</li><li>Rokker dit eller naboens bådstativ? Det kan ske, hvis stativet er dårligt, især hvis det er et træstativ. Det kan også ske, hvis presenningens liner er fastgjort højt oppe i stativet. Flyt linerne ned omkring bådens køl, ror, propelaksel og andre lavt placerede steder. Slå kiler under eller over stativets ben, hvis de er løse. Søm afstivninger på et mørt træstativ.</li></ul><p>Vind &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; m/s&nbsp;</p><p>Kuling &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;14-17&nbsp;<br>Hård kuling: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 17-21&nbsp;<br>Stormende kuling: &nbsp; &nbsp; &nbsp;21-25&nbsp;<br>Storm: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 25-28&nbsp;<br>Stærk storm: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;28-33&nbsp;<br>Orkan: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 33+&nbsp;</p><p>Når teksten nævner storm, er det altså 28-33 m/s. Ved ca. 30 m/s er det vanskeligt at stå op uden at blæse omkuld. I en båd kan man kun kravle, og ved sejlads mod vinden slår bølgesprøjt hårdere end hagl, så man må vende ansigtet bort.&nbsp;</p><p>Meteorologer angiver en tropisk hurricane i km/t, ”for det ved alle, hvad er.” Nej, det ved vi sejlere ikke, for vi er vant til meter i sekundet. Men hvis du hører om en hurricane med 150 km/t, svarer det til 42 m/s 200 km/t er 56 m/s.</p>', '2018-10-06 17:54:46', 0, 2, 5),
(11, 'Ny koncept-bike fra Suzuki', '<p>Suzuki har gjort det igen...&nbsp;</p><p>Koncept-cyklen B-King tager dig med til en ny tid i motorcykel æraen - udover det sci-fi-agtige udseende, byder B-King på en superkraftig tunet 1300 kubik motor fra Hayabusa\'en, på i alt 250 hk. til blot 250 kg.&nbsp;</p><p>Dette giver altså et stærkt vægt/kraft forhold på hele 1 hk/kg...&nbsp;</p><p>Men B-King er ikke kun en kraftig sports maskine, for under \"hjelmen\", gemmer der sig avanceret computer teknologi, der via censorer bla undersøger motorcyklen for fejl før hver køretur.&nbsp;</p><p>B-king\'s elektroniske system indeholder endvidere en avanceret tyverisikring. Motorcyklen startes via \'finger-touch\', og kun hvis fingeraftrykket matcher ejerens. Skulle en tyv prøve på at få startet eller flyttet motorcyklen, ringer B-king op til din mobiltelefon, hvorefter du har mulighed for at tale med synderen, eller aktivere horn og lys.&nbsp;</p><p>Kommunikations forbindelsen giver naturligvis også mulighed for internetadgang og mail, og der er selvfølgelig installeret GPS navigationssystem.&nbsp;</p><p>Chancen for at vi ser B-king på gaden er nok ret minimal, men der er ingen tvivl om at dette er fremtiden.</p>', '2018-10-06 17:51:26', 0, 3, 6),
(12, 'Når en anglofil skal vælge', '<p>Triumph Daytona 955i årgang 2000.&nbsp;</p><p>For 2 år siden havde jeg fornøjelsen af at prøvekøre en Triumph 1200 Daytona, og det var en særdeles positiv oplevelse.&nbsp;</p><p>Allerede fra første sekund vidste jeg at her er en spændende maskine, men desværre skulle den ikke blive min.&nbsp;</p><p>Lyden fra den 147 heste store motor glemte jeg ikke lige med det samme.&nbsp;</p><p>Da jeg så efter en lang vinter skulle til at overveje, hvilken MC jeg skulle købe, faldt tankerne tilbage på den positive oplevelse jeg havde på 1200 Daytona’en. Jeg kørte ned til Vagn Jensen. i Lystrup og spurgte efter en 1200 Daytona - han mente imidlertid i stedet, at jeg skulle købe en 955i. Efter en prøvetur var jeg solgt og købte den med det samme.&nbsp;</p><p>Efter nu at have kørt en del km på 955\'eren er jeg ikke i tvivl om at jeg har fundet en MC, som jeg vil have glæde af i mange år.&nbsp;</p><h4><strong>Udseende og lyd&nbsp;</strong></h4><p>Det karry gule udseende får mange til at vende hovedet en ekstra gang, især når man er inde og tanke op.&nbsp;</p><p>Lyden af denne motor er en behagelig oplevelse, dens tre cylindres klang giver omgående opmærksomhed, når man kommer hurtigt frem i trafikken. De fleste bilister spærrer øjnene op når man foretager en hurtig overhaling og motoren runder de 9000 omdrejninger.&nbsp;</p><h4><strong>Køreegenskaber&nbsp;</strong></h4><p>955’eren egner sig ikke til længerevarende bykørsel. Efter et stykke tid begynder kørestillingen at føles anstrengende, men det er heldigvis ikke i byen at jeg tilbringer det meste af min tid. På landevejen føler man sig noget bedre til rette, dog skal man holde øje med kilometertælleren, da man helt ubevidst kommer til at overskride de tilladte 80 km i timen. Motorvejen er 955’erns foretrukne legeplads, og her er det sjovt at lukke op for de 130 legesyge heste. De 250 km/t opnås på ingen tid og selv på den anden side af denne hastighed, føler du stadig at det er dig der har kontrollen over MC’en.&nbsp;</p><h4><strong>Styreegenskaber&nbsp;</strong></h4><p>Styringen er præcis, og man kan trække den igennem et sving, uden man på noget tidspunkt føler vrik eller vrid.&nbsp;</p><p>Skal det gå stærkt, og er man i et område med en masse sving, så er det at det bliver sjovt - her kan man virkeligt komme igennem uden at man føler maskine tager magten fra en.&nbsp;</p><h4><strong>Bremser&nbsp;</strong></h4><p>Bremserne er særdeles effektive og nemme at dosere. En bilist med sorte nummerplader som ikke overholdte sin vigepligt, gav mig lejlighed at foretage en katastrofe opbremsning. Testen forløb perfekt og bilisten fik opfrisket diverse gloser fra det danske sprog.&nbsp;</p><h4><strong>Økonomi&nbsp;</strong></h4><p>Det er en dyr, meget dyr MC, men man får trods alt en MC der er anderledes.&nbsp;</p><p>Ved normal kørsel er benzin forbruget omkring de 18km/l.&nbsp;</p><p>Kaskoforsikringen ligger på ca. 12.000 kr. om året.&nbsp;</p><h4><strong>Tuning&nbsp;</strong></h4><p>Det skulle ikke være nødvendigt, men det er muligt at få ekstra HK ud af denne pragtmaskine. Triumph kan levere en effektudstødning med en ganske lækker lyd. Derudover kan man chiptune og på denne måde få ekstra HK.&nbsp;</p><p>Skal det være voldsomt, kan man faktisk få en turbo der er specielt udviklet til 955\'eren. Med denne påmonteret, har man mere end 160 heste på baghjulet. Desværre koster sådan en 35.000 tusinde, men hvem har også brug for en turbo...? Måske skulle man her til vinter. Hmm...&nbsp;</p><h4><strong>Konklusion&nbsp;</strong></h4><p>Alt i alt en flot maskine, som styrer fortræffeligt, men der er dog minusser:&nbsp;</p><p>Selve gearskiftet virker lidt for mekanisk, og burde være mere lydløst på en sådan cykel. På begge sider af maskinen sidder der et skjold, der dækker for kæde og for bag bremsen. Dette er udformet på en sådan måde, at ens buksekant kan hænge fast, hvis den hænger løst. Dette prøvede jeg en dag da jeg standsede for at tanke op. Resultatet var et brud på kåben.</p>', '2018-10-06 17:54:26', 0, 3, 7),
(13, 'BMW F650GS', '<p>Jeg har haft fornøjelsen af at prøvekøre BMW\'s F650GS, som er en særdeles alsidig motorcykel. Motorcyklen er udstyret med semi-offroad affjedring og dæk, hvilket gør den til en all-round motorcykel der både kører godt i byen, på landevejen og i lettere terræn.&nbsp;</p><p>F650GS\'eren er ikke noget lyn, og henvender sig, med sine 650 kubik og en topfart på godt 160 km/t, også til det yngre motorcykelfolk, hvor den udmærker sig ved let og hurtig styring, god komfort og motocross præget udseende.&nbsp;</p><h4><strong>Udseende og lyd&nbsp;</strong></h4><p>Motorcyklen ser ikke ud af meget, og lyder heller ikke af meget. De 650 kubik kommer fra en en-cylindret motor, hvilket giver en lidt ujævn motorgang og svag accelerationsevne - den ujævne motorgang kommer især til udtryk ved højere hastigheder på motorvejen. En lækker detalje er at der er varme i håndtagene, hvilket er rigtig dejligt ved landevejs- og motorvejskørsel, og så er den ligeledes udstyret med ABS bremser der virker utroligt godt.&nbsp;</p><h4><strong>Køreegenskaber&nbsp;</strong></h4><p>Motorcyklen er bedst til bykørsel og landevejskørsel, da vindskærmen kun giver minimal beskyttelse på motorvejen, men er man til vind i håret (eller hjelmen red.), er den også sjov at køre på her.&nbsp;</p><p>Den har, som skrevet, ikke de store præstationsegenskaber, men kan køre dig fra punkt A til B på en hurtig og betryggende måde. Eneste ønske til forbedring her, kunne være et ekstra gear at give af, da man meget hurtigt når femte og sidste gear.&nbsp;</p><h4><strong>Styreegenskaber&nbsp;</strong></h4><p>Motorcyklen føles rigtig retningsstabil, men dette gør hverken styringen træg eller langsom. Den manøvrerer godt i sving og slalom både på alm. asfaltvej og grusvej.&nbsp;</p><h4><strong>Bremser&nbsp;</strong></h4><p>Bremserne er effektive og nemme at dosere, og ABS\'en hjælper rigtig godt til ved katastrofeopbremsninger.&nbsp;</p><h4><strong>Økonomi&nbsp;</strong></h4><p>Dette er en billig motorcykel, men kigger man på andre motorcykler i denne prisklasse, kan man let få en meget mere sportspræget motorcykel for pengene.&nbsp;</p><h4><strong>Konklusion&nbsp;</strong></h4><p>Alt i alt en god all-round maskine, som kører og styrer godt. Motorcyklen her er utrolig sjov at \"smide\" rundt på de kuperede grusveje...</p>', '2018-10-04 21:00:20', 0, 3, 7),
(14, 'Suzuki GSF600S Bandit', '<p>Da jeg første gang satte mig op på Suzuki\'s \"ældre\" men bestemt ikke kedelige streetbike, var det ikke ligefrem forventningerne til en racercykel jeg havde i baghovedet, og den er vel nok også bedre til seriøs brug såsom et transportmiddel - ikke desto mindre gør den sig godt på vejen, og er en fornuftig motorcykel til prisen.&nbsp;</p><p>Motorcyklen der har været en af Suzuki\'s mest populære, er utroligt letkørt og passer fint til nybegyndere såvel som de lidt mere garvede motorcyklister, og komfortmæssigt er der ikke meget at sætte fingre på, da sædet er af god kvalitet og kørestillingen fin til både store og små personer.&nbsp;</p><p>Den har en fin gas-respons, og trækker godt i alle seks gear.&nbsp;</p><h4><strong>Udseende og lyd&nbsp;</strong></h4><p>Banditten er skåret efter streetbike eller nakedbike konceptet, hvor der er frit udsyn til motoren, og der er efter min mening gjort et godt arbejde.&nbsp;</p><p>Halvkåben til 10.000 kr., er ganske vidst et dyrt skridt fra den helt nøgne model, men et godt valg, hvis man har lyst til at køre længere ture eller motorvejsture der bestemt ikke er særligt sjove uden - desuden ser den rigtig fræk ud forfra, noget man godt kunne have videreført til GSX-F serien.&nbsp;</p><p>Motoren på banditten, der er luft og oliekølet og måske lidt gammeldags, lyder ikke af meget, men giver alligevel et indtryk af en motor der er rask gennemprøvet. De fire cylindre kan godt virke lidt \"slappe\" i de lave omdrejninger, men har faktisk et solidt træk i mellemområdet fra ca. 4-5000 omdrejninger til ca. 9-10.000 omdrejninger, hvorefter motoren ligesom mister pustet op imod de 12.000 omdrejninger.&nbsp;</p><p>Den yder dog godt prisen taget i betragtning, og pepper man den lidt op med jet-kit, sportsfilter, potte og omdysning, vil man kunne hente nogle af de gemte kræfter frem, der har måttet vige for emissionskravene.&nbsp;</p><h4><strong>Køreegenskaber&nbsp;</strong></h4><p>Der er igen ikke snak om nogen sportscykel, men banditten er alligevel utrolig styrevillig og letkørt, og der føles ingen ubehag hvad enten man kører 50 km/t eller 200 km/t. Den ligger utroligt godt i svingene, der kan tages som en leg selv for de mere uerfarne.&nbsp;</p><p>Affjedringen virker ok på en motorcykel som denne, hvor den bagerste monostøddæmpers dæmpning kan justeres i syv trin og returdæmpning i fire trin. Der er ingen justeringsmuligheder på dæmpningen i forgaflen, hvilket ikke fordrer alt for aggressiv kørsel.&nbsp;</p><p>Kørestillingen er som sagt rimelig, men det skal dog siges, at længere køreture kan blive lidt ubehagelige hvis man har lange ben, grundet fodhvilernes placering, hvilket især kan komme til at genere hvis man under hurtig kørsel kryber ned bag halvkåben, og da de bagerste fodhvilere sidder rimeligt højt, kan det også blive lidt ubekvemt at sidde bagpå i længere tid.&nbsp;</p><h4><strong>Økonomi&nbsp;</strong></h4><p>Denne motorcykel hører til i den billige ende, og er en glimrende begynder-mc. Den har en fornuftig benzinøkonomi der ved almindelig kørsel giver en rækkeevne på omkring 17 km/l, og er billig i forsikring.&nbsp;</p><p>Da nyprisen ligger godt under 100.000 kr., er den også noget alle burde kunne klemme ind i budgettet, uden at slå det helt i stykker.&nbsp;</p><h4><strong>Konklusion&nbsp;</strong></h4><p>Hvis man har brug for et transportmiddel der samtidigt er sjovt at køre på, og som også kan køre hurtigt, er banditten lige sagen - søger man derimod noget mere sportspræget, er dette nok ikke motorcyklen, da den hurtigt bliver triviel at køre på.&nbsp;</p><p>Men set på den lyse side, er den så billig at man vil kunne udskifte den med noget større efter et par år, hvis det er det man ønsker.</p>', '2018-10-04 21:02:24', 0, 3, 6),
(15, 'Vedligeholdelse før vinteren', '<p>Der er ingen tvivl om at vinteren er hård ved din motorcykel. Derfor er det en god idé at opbevare den indendørs - har du ikke den mulighed, tilbyder flere forhandlere opbevaring og pleje for et par hundrede kroner.&nbsp;</p><p>Forsikringsselskaberne tager ekstra høje priser for forsikring af mc i vintermånederne, så derfor er det en god idé at indlevere nummerpladen til dem.&nbsp;</p><h4><strong>Pleje før vinteren&nbsp;</strong></h4><p>Det første du skal gøre er at sørge for at tanken er fyldt op med benzin, således tanken ikke ruster - Husk at benzin godt kan blive for gammel.&nbsp;</p><p>Dernæst skal du rengøre motorcyklen grundigt, og give sædet en gang læderfedt - har du kåbe på din motorcykel, må du ikke bruge ruderens eller sprit til at rengøre glasset, da dette hærdes og splintrer under styrt.&nbsp;</p><p>Smør al gummi med noget gummipleje. Smør alle lejer med olie eller WD-40, og rens kæden med noget kæderens. Påfør kæden kædespray.&nbsp;</p><h4><strong>Motoren skal også have en omgang!&nbsp;</strong></h4><p>Allerførst skal du skifte olie og oliefilter, hvorefter du tager tændrørene ud, og rengøre disse med en stålbørste hvis de trænger til det.&nbsp;</p><p>Afmonter batteriet, og påfyld destilleret vand (kan fås på tankstationer), hvis dette er nødvendigt.&nbsp;</p><p>Du kan evt. tilslutte en pære til det for at aflade det, og så oplade det igen. Dette bør gøres en gang om måneden - husk at bruge en decideret mc-oplader.&nbsp;</p><p>Det er endvidere en god idé at udføre eftersyn på bremser, kæde, og luftfilter...&nbsp;</p><h4><strong>I gang til foråret&nbsp;</strong></h4><p>Sørg for at aftappe karburatoren for benzin via den lille aftapningsskrue der sidder i bunden. Hæld evt. lidt karburatorvæske i tanken, for at lette starten.&nbsp;</p><p>Sørg for at batteriet er fuldt opladet.&nbsp;</p><p>Puds og polér motorcyklen og så er du klar til at gå foråret i møde.</p>', '2018-10-04 21:04:00', 0, 3, 7);

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `bruger`
--

CREATE TABLE `bruger` (
  `id` int(11) NOT NULL,
  `navn` varchar(50) NOT NULL,
  `billede` varchar(50) NOT NULL,
  `profiltekst` varchar(500) NOT NULL,
  `email` varchar(50) NOT NULL,
  `FK_rolle` int(11) NOT NULL,
  `brugernavn` varchar(30) NOT NULL,
  `password` varchar(77) NOT NULL,
  `aktiv` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Indeholder alle brugere af administrationsdelen';

--
-- Data dump for tabellen `bruger`
--

INSERT INTO `bruger` (`id`, `navn`, `billede`, `profiltekst`, `email`, `FK_rolle`, `brugernavn`, `password`, `aktiv`) VALUES
(1, 'Lars Larsen', '1538747350624_lal.jpg', '<p>Hej. Mit navn er Lars Larsen. Og nej - det er ikke mig som sælger dyner...</p><p>Phasellus nec auctor ante, mollis dignissim elit. Vivamus et scelerisque risus, a suscipit metus. Suspendisse at enim finibus, elementum felis ut, viverra enim. Sed a tristique dui, dictum fringilla tortor.</p>', 'lal@bbbmag.dk', 1, 'admin', '$2b$10$mEBS7G6qW0s/Su14r8yN/.fLJgz9WIy5ufN3CSkLkwVRnxAnQx5a2', 1),
(2, 'Lise Lissen', '1538747376147_lil.jpg', 'Phasellus nec auctor ante, mollis dignissim elit. Vivamus et scelerisque risus, a suscipit metus. Suspendisse at enim finibus, elementum felis ut, viverra enim. Sed a tristique dui, dictum fringilla tortor.', 'lil@bbbmag.dk', 2, 'lise', '$2b$10$mEBS7G6qW0s/Su14r8yN/.fLJgz9WIy5ufN3CSkLkwVRnxAnQx5a2', 1),
(3, 'Mikkel Mikkelsen', '1538747391514_mim.jpg', 'Phasellus nec auctor ante, mollis dignissim elit. Vivamus et scelerisque risus, a suscipit metus. Suspendisse at enim finibus, elementum felis ut, viverra enim. Sed a tristique dui, dictum fringilla tortor.', 'mim@bbbmag.dk', 2, 'mikkel', '$2b$10$mEBS7G6qW0s/Su14r8yN/.fLJgz9WIy5ufN3CSkLkwVRnxAnQx5a2', 1),
(4, 'Hans Hansen', '1538747406334_hah.jpg', 'Phasellus nec auctor ante, mollis dignissim elit. Vivamus et scelerisque risus, a suscipit metus. Suspendisse at enim finibus, elementum felis ut, viverra enim. Sed a tristique dui, dictum fringilla tortor.', 'hah@bbbmag.dk', 2, 'hans', '$2b$10$mEBS7G6qW0s/Su14r8yN/.fLJgz9WIy5ufN3CSkLkwVRnxAnQx5a2', 1),
(5, 'Jan Jansen', '1538747420605_jaj.JPG', 'Phasellus nec auctor ante, mollis dignissim elit. Vivamus et scelerisque risus, a suscipit metus. Suspendisse at enim finibus, elementum felis ut, viverra enim. Sed a tristique dui, dictum fringilla tortor.', 'jaj@bbbmag.dk', 2, 'jan', '$2b$10$mEBS7G6qW0s/Su14r8yN/.fLJgz9WIy5ufN3CSkLkwVRnxAnQx5a2', 1),
(6, 'Carl Carlsen', '1538750166744_cac.jpeg', 'Phasellus nec auctor ante, mollis dignissim elit. Vivamus et scelerisque risus, a suscipit metus. Suspendisse at enim finibus, elementum felis ut, viverra enim. Sed a tristique dui, dictum fringilla tortor.', 'cac@bbbmag.dk', 2, 'carl', '$2b$10$mEBS7G6qW0s/Su14r8yN/.fLJgz9WIy5ufN3CSkLkwVRnxAnQx5a2', 1),
(7, 'Erik Eriksen', '1538747462326_ere.jpg', 'Phasellus nec auctor ante, mollis dignissim elit. Vivamus et scelerisque risus, a suscipit metus. Suspendisse at enim finibus, elementum felis ut, viverra enim. Sed a tristique dui, dictum fringilla tortor.', 'ere@bbbmag.dk', 2, 'erik', '$2b$10$mEBS7G6qW0s/Su14r8yN/.fLJgz9WIy5ufN3CSkLkwVRnxAnQx5a2', 1);

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `brugerkategori`
--

CREATE TABLE `brugerkategori` (
  `id` int(11) NOT NULL,
  `FK_bruger` int(11) NOT NULL,
  `FK_kategori` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `brugerkategori`
--

INSERT INTO `brugerkategori` (`id`, `FK_bruger`, `FK_kategori`) VALUES
(1, 2, 1),
(2, 3, 1),
(3, 5, 2),
(4, 4, 2),
(6, 6, 3),
(7, 7, 3),
(13, 1, 1),
(14, 1, 2),
(15, 1, 3);

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `brugerrolle`
--

CREATE TABLE `brugerrolle` (
  `id` int(11) NOT NULL,
  `navn` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Indeholder alle brugerroller til brugerne';

--
-- Data dump for tabellen `brugerrolle`
--

INSERT INTO `brugerrolle` (`id`, `navn`) VALUES
(1, 'admin'),
(2, 'redaktør');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `kategori`
--

CREATE TABLE `kategori` (
  `id` int(11) NOT NULL,
  `navn` varchar(30) NOT NULL,
  `FK_sortering` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Indeholder alle kategorier til artiklerne';

--
-- Data dump for tabellen `kategori`
--

INSERT INTO `kategori` (`id`, `navn`, `FK_sortering`) VALUES
(1, 'Biler', 2),
(2, 'Både', 2),
(3, 'Bike\'s', 2);

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `kategori_sortering`
--

CREATE TABLE `kategori_sortering` (
  `id` int(11) NOT NULL,
  `valg` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `kategori_sortering`
--

INSERT INTO `kategori_sortering` (`id`, `valg`) VALUES
(1, 'asc'),
(2, 'desc');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `kommentar`
--

CREATE TABLE `kommentar` (
  `id` int(11) NOT NULL,
  `besked` varchar(600) NOT NULL,
  `navn` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `dato` datetime NOT NULL,
  `FK_artikel` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Indkommende kommentarer fra læsere af en attikel';

--
-- Data dump for tabellen `kommentar`
--

INSERT INTO `kommentar` (`id`, `besked`, `navn`, `email`, `dato`, `FK_artikel`) VALUES
(1, '<p>Virkelig god og informativ artikel - Tak for det!</p>', 'Katarina Petersen', 'katarina.petersen@outlook.com', '2018-10-03 09:08:06', 1),
(2, 'Jeg elsker små biler.', 'Katarina Petersen', 'katarina.petersen@outlook.com', '2018-10-03 09:09:17', 1),
(3, 'Det var også på tide at General motors kom ud af starthullerne!', 'Katarina Petersen', 'katarina.petersen@outlook.com', '2018-10-03 09:10:11', 2),
(4, 'Måske det var på tide med en ny bil :)', 'Michael Jensen', 'mic@jensen.dk', '2018-10-03 09:10:58', 3),
(5, 'Ja jeg overvejer det også ;)', 'Katarina Petersen', 'katarina.petersen@outlook.com', '2018-10-03 09:11:33', 3),
(6, 'Det er simpelthen en gammel drengedrøm at eje en Corvette - det er bare kram...', 'Palle', 'pm@upperup.dk', '2018-10-03 09:12:07', 4),
(7, 'Det lyder lovende.', 'Bådmanden', 'bb@kutter.dk', '2018-10-03 09:13:03', 5),
(8, 'Ja det var også på tide at det blev muligt for os almindelige mennesker, at kunne være med rent prismæssigt ;)', 'Skipperen', 'ibsen@skibsen.dk', '2018-10-03 09:13:58', 3),
(15, 'Måske vi kunne slå os sammen Palle !?!', 'Katarina Petersen', 'Katarina.petersen@outlook.com', '2018-10-03 13:01:18', 4);

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `kontaktbesked`
--

CREATE TABLE `kontaktbesked` (
  `id` int(11) NOT NULL,
  `navn` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `emne` varchar(50) NOT NULL,
  `besked` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Indkommende beskeder fra kontaktformular på kontakt-side';

--
-- Data dump for tabellen `kontaktbesked`
--

INSERT INTO `kontaktbesked` (`id`, `navn`, `email`, `emne`, `besked`) VALUES
(4, 'Katarina Petersen', 'katarina.petesen@outlook.com', 'Test', 'dette er en test');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `kontaktoplysning`
--

CREATE TABLE `kontaktoplysning` (
  `id` int(11) NOT NULL,
  `firmanavn` varchar(50) NOT NULL,
  `vejnavn` varchar(50) NOT NULL,
  `husnummer` varchar(8) NOT NULL,
  `postnummer` int(4) NOT NULL,
  `bynavn` varchar(50) NOT NULL,
  `land` varchar(30) NOT NULL,
  `telefon` varchar(13) NOT NULL,
  `fax` varchar(13) NOT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Indeholder virksomhedens adresse';

--
-- Data dump for tabellen `kontaktoplysning`
--

INSERT INTO `kontaktoplysning` (`id`, `firmanavn`, `vejnavn`, `husnummer`, `postnummer`, `bynavn`, `land`, `telefon`, `fax`, `email`) VALUES
(1, 'Magasinet Bil, Båd & Bike', 'Marielundvej', '46 E', 2730, 'Herlev', 'Denmark', '+45 7011 5100', '+45 4485 8925', 'redaktionen@bbbmag.dk');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `nyhedsbrev`
--

CREATE TABLE `nyhedsbrev` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `side`
--

CREATE TABLE `side` (
  `id` int(11) NOT NULL,
  `navn` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `side`
--

INSERT INTO `side` (`id`, `navn`) VALUES
(1, 'Sponsor');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `side_sponsor_priser`
--

CREATE TABLE `side_sponsor_priser` (
  `id` int(11) NOT NULL,
  `visninger` int(11) NOT NULL,
  `pris` int(11) NOT NULL,
  `FK_side` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `side_sponsor_priser`
--

INSERT INTO `side_sponsor_priser` (`id`, `visninger`, `pris`, `FK_side`) VALUES
(1, 1000, 50, 1),
(2, 2000, 47, 1),
(3, 5000, 45, 1),
(4, 10000, 40, 1),
(5, 25000, 35, 1),
(6, 50000, 30, 1);

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `side_tekst`
--

CREATE TABLE `side_tekst` (
  `id` int(11) NOT NULL,
  `indhold` varchar(1000) NOT NULL,
  `FK_side` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `side_tekst`
--

INSERT INTO `side_tekst` (`id`, `indhold`, `FK_side`) VALUES
(1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, lectus non aliquet hendrerit, lectus elit iaculis sapien, et tristique magna eros sed felis. Nunc ut posuere metus. Sed id turpis felis. Nullam tellus diam, finibus eget mauris non, elementum molestie mi. Donec aliquet velit quis blandit euismod. Sed elit elit, faucibus sit amet diam id, commodo pulvinar ex. Sed finibus orci in erat dictum pulvinar. Proin et posuere libero. Nunc lobortis risus quis turpis volutpat molestie. In hac habitasse platea dictumst. Ut pretium nisl vitae orci rutrum accumsan sed ut augue.', 1);

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `sponsor_reklame`
--

CREATE TABLE `sponsor_reklame` (
  `id` int(11) NOT NULL,
  `billede` varchar(100) NOT NULL,
  `FK_kategori` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `sponsor_reklame`
--

INSERT INTO `sponsor_reklame` (`id`, `billede`, `FK_kategori`) VALUES
(1, 'car_ad_1.gif', 1),
(2, 'car_ad_2.gif', 1),
(3, 'car_ad_3.gif', 1),
(4, 'car_ad_4.gif', 1),
(5, 'car_ad_5.gif', 1),
(6, 'boat_ad_1.gif', 2),
(7, 'boat_ad_2.gif', 2),
(8, 'boat_ad_3.gif', 2),
(9, 'boat_ad_4.gif', 2),
(10, 'boat_ad_5.gif', 2),
(11, 'boat_ad_6.gif', 2),
(12, 'bike_ad_1.gif', 3),
(13, 'bike_ad_2.gif', 3),
(14, 'bike_ad_3.gif', 3),
(15, 'bike_ad_4.gif', 3),
(16, 'bike_ad_5.gif', 3),
(17, 'bike_ad_6.gif', 3);

--
-- Begrænsninger for dumpede tabeller
--

--
-- Indeks for tabel `artikel`
--
ALTER TABLE `artikel`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_kategori` (`FK_kategori`),
  ADD KEY `FK_bruger` (`FK_bruger`);

--
-- Indeks for tabel `bruger`
--
ALTER TABLE `bruger`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `brugernavn` (`brugernavn`),
  ADD KEY `FK_rolle` (`FK_rolle`);

--
-- Indeks for tabel `brugerkategori`
--
ALTER TABLE `brugerkategori`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_bruger` (`FK_bruger`),
  ADD KEY `FK_kategori` (`FK_kategori`);

--
-- Indeks for tabel `brugerrolle`
--
ALTER TABLE `brugerrolle`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_sortering` (`FK_sortering`);

--
-- Indeks for tabel `kategori_sortering`
--
ALTER TABLE `kategori_sortering`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `kommentar`
--
ALTER TABLE `kommentar`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_artikel` (`FK_artikel`);

--
-- Indeks for tabel `kontaktbesked`
--
ALTER TABLE `kontaktbesked`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `kontaktoplysning`
--
ALTER TABLE `kontaktoplysning`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `nyhedsbrev`
--
ALTER TABLE `nyhedsbrev`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indeks for tabel `side`
--
ALTER TABLE `side`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `side_sponsor_priser`
--
ALTER TABLE `side_sponsor_priser`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_side` (`FK_side`);

--
-- Indeks for tabel `side_tekst`
--
ALTER TABLE `side_tekst`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_side` (`FK_side`);

--
-- Indeks for tabel `sponsor_reklame`
--
ALTER TABLE `sponsor_reklame`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_kategori` (`FK_kategori`);

--
-- Brug ikke AUTO_INCREMENT for slettede tabeller
--

--
-- Tilføj AUTO_INCREMENT i tabel `artikel`
--
ALTER TABLE `artikel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Tilføj AUTO_INCREMENT i tabel `bruger`
--
ALTER TABLE `bruger`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Tilføj AUTO_INCREMENT i tabel `brugerkategori`
--
ALTER TABLE `brugerkategori`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Tilføj AUTO_INCREMENT i tabel `brugerrolle`
--
ALTER TABLE `brugerrolle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Tilføj AUTO_INCREMENT i tabel `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Tilføj AUTO_INCREMENT i tabel `kategori_sortering`
--
ALTER TABLE `kategori_sortering`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Tilføj AUTO_INCREMENT i tabel `kommentar`
--
ALTER TABLE `kommentar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Tilføj AUTO_INCREMENT i tabel `kontaktbesked`
--
ALTER TABLE `kontaktbesked`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Tilføj AUTO_INCREMENT i tabel `kontaktoplysning`
--
ALTER TABLE `kontaktoplysning`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Tilføj AUTO_INCREMENT i tabel `nyhedsbrev`
--
ALTER TABLE `nyhedsbrev`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Tilføj AUTO_INCREMENT i tabel `side`
--
ALTER TABLE `side`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Tilføj AUTO_INCREMENT i tabel `side_sponsor_priser`
--
ALTER TABLE `side_sponsor_priser`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Tilføj AUTO_INCREMENT i tabel `side_tekst`
--
ALTER TABLE `side_tekst`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Tilføj AUTO_INCREMENT i tabel `sponsor_reklame`
--
ALTER TABLE `sponsor_reklame`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Begrænsninger for dumpede tabeller
--

--
-- Begrænsninger for tabel `artikel`
--
ALTER TABLE `artikel`
  ADD CONSTRAINT `artikel_ibfk_1` FOREIGN KEY (`FK_kategori`) REFERENCES `kategori` (`id`),
  ADD CONSTRAINT `artikel_ibfk_3` FOREIGN KEY (`FK_bruger`) REFERENCES `bruger` (`id`);

--
-- Begrænsninger for tabel `bruger`
--
ALTER TABLE `bruger`
  ADD CONSTRAINT `bruger_ibfk_1` FOREIGN KEY (`FK_rolle`) REFERENCES `brugerrolle` (`id`);

--
-- Begrænsninger for tabel `brugerkategori`
--
ALTER TABLE `brugerkategori`
  ADD CONSTRAINT `brugerkategori_ibfk_1` FOREIGN KEY (`FK_bruger`) REFERENCES `bruger` (`id`),
  ADD CONSTRAINT `brugerkategori_ibfk_2` FOREIGN KEY (`FK_kategori`) REFERENCES `kategori` (`id`);

--
-- Begrænsninger for tabel `kategori`
--
ALTER TABLE `kategori`
  ADD CONSTRAINT `kategori_ibfk_1` FOREIGN KEY (`FK_sortering`) REFERENCES `kategori_sortering` (`id`);

--
-- Begrænsninger for tabel `kommentar`
--
ALTER TABLE `kommentar`
  ADD CONSTRAINT `kommentar_ibfk_1` FOREIGN KEY (`FK_artikel`) REFERENCES `artikel` (`id`);

--
-- Begrænsninger for tabel `side_sponsor_priser`
--
ALTER TABLE `side_sponsor_priser`
  ADD CONSTRAINT `side_sponsor_priser_ibfk_1` FOREIGN KEY (`FK_side`) REFERENCES `side` (`id`);

--
-- Begrænsninger for tabel `side_tekst`
--
ALTER TABLE `side_tekst`
  ADD CONSTRAINT `side_tekst_ibfk_1` FOREIGN KEY (`FK_side`) REFERENCES `side` (`id`);

--
-- Begrænsninger for tabel `sponsor_reklame`
--
ALTER TABLE `sponsor_reklame`
  ADD CONSTRAINT `sponsor_reklame_ibfk_1` FOREIGN KEY (`FK_kategori`) REFERENCES `kategori` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
