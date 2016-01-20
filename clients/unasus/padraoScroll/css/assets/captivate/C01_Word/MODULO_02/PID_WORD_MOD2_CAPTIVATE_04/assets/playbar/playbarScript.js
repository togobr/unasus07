cp.playbarAssetArr = 
[
	'AudioOff',
	'AudioOn',
	'BackGround',
	'Backward',
	'Color',
	'ColorSmall',
	'CC',
	'Exit',
	'FastForward',
	'FastForward1',
	'FastForward2',
	'Forward',
	'Glow',
	'GlowSmall',
	'Height',
	'Play',
	'Pause',
	'Progress',
	'Rewind',
	'Stroke',
	'StrokeSmall',
	'Thumb',
	'ThumbBase',
	'TOC'
];
cp.playbarTooltips = 
{
	AudioOff : "Áudio desligado ",
	AudioOn : "Áudio ligado ",
	Backward : "Voltar ",
	CC : "Legenda codificada ",
	Exit : "Sair ",
	FastForward : "Velocidade 2x de avançar ",
	FastForward1 : "Velocidade 4x de avançar ",
	FastForward2 : "Velocidade normal ",
	Forward : "Avançar ",
	Play : "Reproduzir ",
	Pause : "Pausar ",
	Rewind : "Retroceder " ,
	TOC : "Índice analítico ",
	Info : "Informações ",
	Print : "Imprimir "
};
cp.responsiveButtons = 
{
	//"ButtonName"	: 	[Primary,Tablet,Mobile],
	"Rewind"		: 	[true,true,false],
	"Backward"		: 	[true,true,true],
	"Play"			: 	[true,true,true],
	"Slider"		: 	[true,true,false],
	"Forward"		: 	[true,true,true],
	"CC"			: 	[true,true,true],
	"AudioOn"		: 	[true,false,false],
	"Exit"			: 	[true,true,true],
	"FastForward"	: 	[true,true,false],
	"TOC"			: 	[true,true,false]
};
cp.handleSpecialForPlaybar = function(playbarConstruct)
{
}