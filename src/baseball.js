/**
 * 
 */


function load() {
	menu();
}


/*
	2->dim(|LSTAM
	100->|LSTAM(1:0->|LSTAM(2
	0->B:0->S:0->O:0->theta:0->Z:1->I:0->T:0->U
	3->dim(|LBASE:Fill(0,|LBASE:3->dim(|LBP:Fill(0,|LBP
	ClrDraw:AxesOff:FnOff 
	getKey
	0->Xmin:94->Xmax:0->Ymax:~62->Ymin
	0->Z
	Text(0,0,"HOW MANY INNINGS?
	Text(16,8,"3 INNINGS
	Text(24,8,"6 INNINGS
	Text(32,8,"9 INNINGS
	1->X
	Repeat K=105
		Text(8+8X,3,"-
	Repeat (Ans=25)+(Ans=34)+(Ans=105):getKey:End
		Ans->K
		Text(8+8X,3,"    "
		If K=34:X+1->X
		If K=25:X-1->X
		If X=0:3->X:If X=4:1->X
	End
	X*3->Q
	Lbl NI
	If I>=Q:Then
		If (T>U)(theta=1):Goto EN
	End
	
	
	
	ClrDraw
	If Z:Then
		Text(~1,0,0,"+":Text(~1,0,9,Z:Text(~1,0,18,"RUNS
		Pause 
	ClrDraw:End
	Text(0,30,"BASEBALL
	If theta=0:Z+U->U
	If theta=1:Z+T->T
	Text(32,70,"USA:":Text(40,70,"CAN:"
	Text(32,87,U:Text(40,87,T
	0->Z
	"+
	If |LBASE(1:Text(12,88,Ans
	If |LBASE(2:Text(3,79,Ans
	If |LBASE(3:Text(12,70,Ans
	Line(80,~5,90,~15
	Line(90,~15,80,~25
	Line(80,~25,70,~15
	Line(70,~15,80,~5
	Text(10,36,B
	Text(10,40,"-
	Text(10,44,S
	Text(10,57,"out
	Text(10,52,O
	"top
	If theta=1:"bot
	Text(10,14,Ans
	Text(10,27,I
	If theta=1:prgmNEWPITCH
	If theta=0:prgmNEWHIT
	If theta=0:Then
		ClrDraw:If P=1:"4 SEAM FASTBALL
		If P=4:"CURVEBALL
		If P=3:"SLIDER
		If P=2:"2 SEAM FASTBALL
		Text(0,0,Ans
	For(W,1,120:End:End
	If X=1:Goto HR
	If X=2:Goto TR
	If X=3:Goto DB
	If X=4:Goto SI
	If X=6:Goto S
	If X=7:Goto F
	If X=8:Goto B
	Lbl O
	O+1->O
	ClrDraw
	randInt(1,20->X
	If X=1:Then
	If (O!=3)(|LBASE(3)):Then:Z+1->Z:0->|LBASE(3:End
	If (not(|LBASE(3)))(|LBASE(2))(randInt(1,3)=2):Then:1->|LBASE(3):0->|LBASE(2):End
		16->C
		"FLY BALL....CAUGHT!
	End
	If (X=2)+(X=8)+(X=9)+(X>15):Then
		9->C
		"GROUNDOUT
	If (|LBASE(3))(randInt(1,2)=2)((O!=2)(|LBASE(1))+(|LBASE(3)(randInt(1,2)=2)(0=|LBASE(1):Then:0->|LBASE(3):Z+1->Z:End
	If (|LBASE(1))(|LBASE(2))(|LBASE(3)):Then:0->|LBASE(3):If O!=2:Z+1->Z:End
	If (0=|LBASE(3))(|LBASE(2))+(|LBASE(2))(|LBASE(1)):Then:1->|LBASE(3):0->|LBASE(2:End
		"GROUNDOUT
		If (O!=3)(|LBASE(1)):Then
	O+1->O:0->|LBASE(1:12->C:"DOUBLE PLAY!":End:End
	If X=3:Then
		7->C
		"POP-OUT"
	End
	If X=4:Then
		8->C
		"LINE OUT
	End
	If X=5:Then
		16->C
		"GREAT DIVING GRAB!!
	End
	If X=6:Then
		15->C
		"SLOW ROLLER...OUT
	End
	If X=7:Then
		17->C
		"NUBBER - TAGGED OUT
	End
	If (X>9)(X<16):Then
		8->C
	If (randInt(1,2)=2)(|LBASE(3)):Then:1->Z:0->|LBASE(3:End
	If (|LBASE(2))(randInt(1,4)=3)(0=|LBASE(3):Then:1->|LBASE(3):0->|LBASE(2):End
		"FLIED OUT
	End
	Text(27,45-(C*2),Ans
	Pause 
	0->S:0->B
	Lbl OT
	If O>=3:Then
		0->Z
		DelVar ADelVar BDelVar CDelVar DDelVar EDelVar FDelVar GDelVar HDelVar JDelVar KDelVar LDelVar MDelVar NDelVar ODelVar PDelVar RDelVar SDelVar VDelVar WDelVar XDelVar Y:DelVar |LBASE:0->S:0->B:0->O
		3->dim(|LBASE):Fill(0,|LBASE
		theta+1->theta
		If theta=2:Then
		0->theta:I+1->I:End
		If (T>U)(theta=1)(I>=Q)+(U>T)(theta=0)(I>Q)+(I>Q)((T>U)+(U>T)(theta=0)):Goto EN
		ClrDraw
		If theta=1:Then
			Text(27,45-14,"BOTTOM
			Text(27,45+12,I
		End
		If theta=0:Then
			Text(27,45-8,"TOP
			Text(27,45+6,I
		End
		Pause 
	End
	Goto NI
	Lbl S
	ClrDraw
	S+1->S
	Text(27,45-14,"STRIKE
	Text(27,45+12,S
	Pause 
	If S=3:Then
		Text(27+8,45-14,"YOUR OUT!":Pause 
	0->S:0->B:O+1->O:Goto OT:End
	Goto NI
	Lbl F
	ClrDraw
	Text(27,45-12,"*FOUL*
	Pause 
	If S!=2:S+1->S
	Goto NI
	Lbl B
	ClrDraw
	B+1->B
	Text(27,45-10,"BALL
	Text(27,45+8,B
	Pause 
	If B=4:Then
		Text(27+8,45-26,"TAKE YOUR BASE!":Pause 
		0->S:0->B
		If |LBASE(1:Then
			If |LBASE(2:Then
				If |LBASE(3
				Z+1->Z
				1->|LBASE(3
			End
			1->|LBASE(2
		End
		1->|LBASE(1
	End
	Goto NI
	Lbl HR
	ClrDraw
	Text(27,45-31,"***HOME RUN!!***
	Pause 
	Z+|LBASE(1)+|LBASE(2)+|LBASE(3)+1->Z
	Fill(0,|LBASE
	0->B:0->S:Goto NI
	Lbl TR
	0->B:0->S
	ClrDraw
	randInt(1,2)->X
	If X=1
	Text(27,45-28,"TRIPLE TO RIGHT
	If X=2
	Text(27,45-37,"TRIPLE DOWN THE LINE
	Pause 
	0->B:0->S
	If |LBASE(3:Then:Z+1->Z
	0->|LBASE(3:End
	If |LBASE(2:Then:Z+1->Z
	0->|LBASE(2:End
	If |LBASE(1:Then:Z+1->Z:0->|LBASE(1:End
	1->|LBASE(3
	Goto NI
	Lbl DB
	0->S:0->B
	ClrDraw
	randInt(1,4->X
	If X=1:Text(27,45-26,"DOUBLE TO LEFT
	If X=2:Text(27,45-14,"GAP SHOT
	If X=3:Text(27,45-40,"SPLITS THE OUTFIELDERS
	If X=4:Text(27,45-35,"DOUBLE DOWN THE LINE
	Pause 
	If |LBASE(3:Then:Z+1->Z:0->|LBASE(3:End
	If |LBASE(1:Then
		0->|LBASE(1
		1->|LBASE(3
		If randInt(1,3!=1:Then
			0->|LBASE(3:Z+1->Z
	End:End
	If |LBASE(2:Then
		Z+1->Z:0->|LBASE(2
	End
	1->|LBASE(2
	Goto NI
	
	Lbl SI
	0->B:0->S
	ClrDraw
	randInt(1,4->X
	If X=1:Text(27,45-18,"BLOOP HIT
	If X=2:Text(27,45-26,"SINGLE TO LEFT
	If X=3:Text(27,45-30,"SINGLE TO RIGHT
	If X=4:Text(27,45-20,"BASE KNOCK
	If X=5:Text(27,45-16,"ERROR...
	Pause 
	If |LBASE(3:Then
		Z+1->Z
		0->|LBASE(3
	End
	If |LBASE(2:Then
		0->|LBASE(2
		1->|LBASE(3
		If randInt(1,2=2:Then
			1+Z->Z
			0->|LBASE(3
	End:End
	If |LBASE(1:Then
		1->|LBASE(2
		If (randInt(1,3=2))(|LBASE(3)=0):Then
			1->|LBASE(3
			0->|LBASE(2
	End:End
	1->|LBASE(1
	Goto NI
	Lbl EN
	ClrDraw
	"YOU LOST.
	If U>T:"YOU WON!
	Text(27,45-14,Ans
	Pause 
	ClrDraw
	Text(0,45-20,"FINAL SCORE:
	Text(27,10,"USA:":Text(~1,27,33,U
	Text(27,51,"CAN:":Text(~1,27,75,T
	Text(48,10,"THANK YOU FOR PLAYING
	Text(56,4,"BASEBALL BY BRYAN LEASOT
	Pause 
	DelVar ADelVar BDelVar CDelVar DDelVar EDelVar FDelVar GDelVar HDelVar IDelVar JDelVar KDelVar LDelVar MDelVar NDelVar ODelVar PDelVar QDelVar RDelVar SDelVar TDelVar UDelVar VDelVar WDelVar XDelVar YDelVar ZDelVar thetaDelVar |LBASEDelVar |LBPDelVar |LSTAMDelVar [A]
	ClrDraw:FnOn :AxesOn:Output(8,16," "
*/