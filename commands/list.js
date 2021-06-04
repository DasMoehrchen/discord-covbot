const Discord = require('discord.js');

module.exports.run = function (msg) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#ff0000')
		.setTitle('Es können nur deutsche Städte, Kreise und Bezirke abgefragt werden.')
		.setAuthor('Verfügbare Kommunen')
		.addFields({
			name: 'Städte, Landkreise, Stadtkreise, Kreise und Berliner Bezirke müssen unterschieden werden.',
			value: 'Für diese Kommunen können Inzidenzen abgefragt werden:'
		}, {
			name: 'Städte',
			value: 'Flensburg\nKiel\nLübeck\n		Neumünster\n		Hamburg\n		Braunschweig\n		Salzgitter\n		Wolfsburg\n		Delmenhorst\n		Emden\n		Oldenburg (Oldb)\n		Osnabrück\n		Wilhelmshaven\n		Bremen\n		Bremerhaven\n		Düsseldorf\n		Duisburg\n		Essen\n		Krefeld\n		Mönchengladbach\n		Mülheim an der Ruhr\n		Oberhausen\n		Remscheid\n		Solingen\n		Wuppertal\n		Bonn\n		Köln\n		Leverkusen\n		Bottrop\n		Gelsenkirchen\n		Münster\n		Bielefeld\n		Bochum\n		Dortmund\n		Hagen\n		Hamm\n		Herne\n		Darmstadt\n		Frankfurt am Main\n		Offenbach am Main\n		Wiesbaden\n		Kassel\n		Koblenz\n		Trier\n		Frankenthal (Pfalz)\n		Kaiserslautern\n		Landau in der Pfalz\n		Ludwigshafen am Rhein\n		Mainz\n		Neustadt an der Weinstraße\n		Pirmasens\n		Speyer\n		Worms\n		Zweibrücken\n		Ingolstadt\n		München\n		Rosenheim\n		Landshut\n		Passau\n		Straubing\n		Amberg\n		Regensburg\n		Weiden i.d. OPf.\n		Bamberg\n		Bayreuth\n		Coburg\n		Hof\n		Ansbach\n		Erlangen\n		Fürth\n		Nürnberg\n		Schwabach\n		Aschaffenburg\n		Schweinfurt\n		Würzburg\n		Augsburg\n		Kaufbeuren\n		Kempten (Allgäu)\n		Memmingen\n		Brandenburg an der Havel\n		Cottbus\n		Frankfurt (Oder)\n		Potsdam\n		Rostock\n		Schwerin\n		Chemnitz\n		Dresden\n		Leipzig\n		Dessau-Roßlau\n		Halle (Saale)\n		Magdeburg\n		Erfurt\n		Gera\n		Jena\n		Suhl\n		Weimar\n		Eisenach\n		'
		}, {
			name: 'Stadtkreise',
			value: ' '
		}, {
			name: 'Landkreise',
			value: ' '
		}, {
			name: 'Kreise',
			value: ' '
		}, {
			name: 'Bezirke',
			value: ' '
		}, )
		.setFooter('Alle Daten werden vom RKI bezogen.');

	msg.channel.send(exampleEmbed);
}

module.exports.help = {
	name: "list"
}