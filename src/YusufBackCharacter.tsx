export type YusufBackCharacterProps = {
  bodyY?: number;
  headRotation?: number;
  leftArmSwing?: number;
  rightArmSwing?: number;
  leftElbowRotation?: number;
  rightElbowRotation?: number;
  leftHandRotation?: number;
  rightHandRotation?: number;
  leftHipRotation?: number;
  rightHipRotation?: number;
  leftKneeRotation?: number;
  rightKneeRotation?: number;
};

export const YusufBackCharacter = ({
  bodyY = 0,
  headRotation = 0,
  leftArmSwing = 0,
  rightArmSwing = 0,
  leftElbowRotation = 0,
  rightElbowRotation = 0,
  leftHandRotation = 0,
  rightHandRotation = 0,
  leftHipRotation = 0,
  rightHipRotation = 0,
  leftKneeRotation = 0,
  rightKneeRotation = 0,
}: YusufBackCharacterProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="YUSUF_BACK_SVG" width="100%" height="auto" viewBox="220 500 430 900" version="1.1" preserveAspectRatio="xMidYMid meet" data-rig-view="back">
      <defs id="YB_DEF__defs1">
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1">
          <path d="M 451.688,882.154 H 1771.5 V 64.1238 H 451.688 Z" transform="translate(-1770.4258,-599.27722)" id="YB_DEF__path1" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath2">
          <path d="M 451.688,882.154 H 1771.5 V 64.1238 H 451.688 Z" transform="translate(-1770.0891,-565.05941)" id="YB_DEF__path2" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath3">
          <path d="M 451.688,882.154 H 1771.5 V 64.1238 H 451.688 Z" transform="translate(-1769.3565,-545.09902)" id="YB_DEF__path3" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath4">
          <path d="M 451.688,882.154 H 1771.5 V 64.1238 H 451.688 Z" transform="translate(-1770.0693,-498.04951)" id="YB_DEF__path4" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath5">
          <path d="M 451.688,882.154 H 1771.5 V 64.1238 H 451.688 Z" transform="translate(-1771.495,-428.18811)" id="YB_DEF__path5" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath6">
          <path d="M 451.688,882.154 H 1771.5 V 64.1238 H 451.688 Z" transform="translate(-1770.7822,-299.87131)" id="YB_DEF__path6" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath7">
          <path d="M 451.688,882.154 H 1771.5 V 64.1238 H 451.688 Z" transform="translate(-1770.0693,-170.12873)" id="YB_DEF__path7" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath8">
          <path d="M 451.688,882.154 H 1771.5 V 64.1238 H 451.688 Z" transform="translate(-1770.7822,-64.623827)" id="YB_DEF__path8" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath9">
          <path d="M 451.688,882.154 H 1771.5 V 64.1238 H 451.688 Z" transform="translate(-1422.8136,-602.62871)" id="YB_DEF__path9" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath10">
          <path d="m 451.688,882.154 h 50.475 v -16.979 h -50.475 z" transform="translate(-470.86691,-879.94792)" id="YB_DEF__path10" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath11">
          <path d="M 451.688,882.154 H 1771.5 V 64.1238 H 451.688 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path11" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath22">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path22" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath24">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-147.65301,-1028.0455)" id="YB_DEF__path24" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath25">
          <path d="m 155.399,990.489 h 68.674 v -22.042 h -68.674 z" transform="translate(-157.0048,-981.70892)" id="YB_DEF__path25" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath27">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path27" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath29">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-148.5906,-1048.1991)" id="YB_DEF__path29" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath31">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-143.1024,-1075.1011)" id="YB_DEF__path31" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath33">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-230.03151,-1081.0479)" id="YB_DEF__path33" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath35">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-197.238,-1004.0131)" id="YB_DEF__path35" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath37">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-148.0807,-963.89153)" id="YB_DEF__path37" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath39">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-246.46321,-828.56482)" id="YB_DEF__path39" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath41">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-191.2999,-836.10442)" id="YB_DEF__path41" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath43">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-150.4059,-807.93922)" id="YB_DEF__path43" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath45">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-166.893,-760.01202)" id="YB_DEF__path45" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath47">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-218.66221,-760.06322)" id="YB_DEF__path47" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath49">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-227.63271,-550.30042)" id="YB_DEF__path49" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath51">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-159.7585,-546.22141)" id="YB_DEF__path51" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath53">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-229.3267,-539.81371)" id="YB_DEF__path53" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath55">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-163.6126,-541.43911)" id="YB_DEF__path55" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath57">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-105.2227,-791.80292)" id="YB_DEF__path57" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath59">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-80.6551,-800.01602)" id="YB_DEF__path59" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath61">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-101.3862,-786.72442)" id="YB_DEF__path61" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath63">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-95.9128,-785.73432)" id="YB_DEF__path63" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath65">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-88.7089,-788.62822)" id="YB_DEF__path65" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath67">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-83.3548,-791.33442)" id="YB_DEF__path67" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath69">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-274.2592,-894.14182)" id="YB_DEF__path69" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath71">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-259.02961,-966.29742)" id="YB_DEF__path71" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath73">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-275.9377,-801.03982)" id="YB_DEF__path73" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath75">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-300.59891,-804.11042)" id="YB_DEF__path75" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath77">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-279.54441,-791.64122)" id="YB_DEF__path77" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath79">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-284.2231,-790.38602)" id="YB_DEF__path79" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath81">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-291.2581,-793.31322)" id="YB_DEF__path81" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath83">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-296.59101,-796.06102)" id="YB_DEF__path83" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath85">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-109.2171,-893.17852)" id="YB_DEF__path85" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath87">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-123.2452,-965.26842)" id="YB_DEF__path87" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath89">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-144.0612,-941.36462)" id="YB_DEF__path89" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath91">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-132.3657,-951.48482)" id="YB_DEF__path91" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath93">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-233.18901,-972.89903)" id="YB_DEF__path93" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath95">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-246.08641,-970.59942)" id="YB_DEF__path95" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath97">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-245.9959,-807.69672)" id="YB_DEF__path97" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath98">
          <path d="m 192.726,978.295 h 40.871 v -12.507 h -40.871 z" transform="translate(-192.72561,-976.73183)" id="YB_DEF__path98" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath100">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path100" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath102">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-89.252005,-811.99312)" id="YB_DEF__path102" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath104">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-88.394905,-805.15112)" id="YB_DEF__path104" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath106">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-133.7959,-805.86692)" id="YB_DEF__path106" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath108">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-129.8173,-806.40692)" id="YB_DEF__path108" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath109">
          <path d="m 137.222,802.545 h 1 v -11.588 h -1 z" transform="translate(-137.7216,-802.54462)" id="YB_DEF__path109" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath111">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path111" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath112">
          <path d="m 159.805,801 h 1 v -12.36 h -1 z" transform="translate(-160.3051,-800.99962)" id="YB_DEF__path112" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath114">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path114" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath115">
          <path d="m 188.035,800.227 h 1 v -13.132 h -1 z" transform="translate(-188.53461,-800.22712)" id="YB_DEF__path115" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath117">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path117" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath118">
          <path d="m 216.264,801 h 1 v -12.36 h -1 z" transform="translate(-216.76411,-800.99962)" id="YB_DEF__path118" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath120">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path120" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath121">
          <path d="m 238.848,802.545 h 1 v -11.588 h -1 z" transform="translate(-239.34771,-802.54462)" id="YB_DEF__path121" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath123">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path123" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath125">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-217.08841,-806.19832)" id="YB_DEF__path125" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath127">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-181.4244,-977.52293)" id="YB_DEF__path127" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath129">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-198.29391,-977.52293)" id="YB_DEF__path129" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath131">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-175.8013,-934.26432)" id="YB_DEF__path131" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath133">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-203.917,-934.26432)" id="YB_DEF__path133" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath135">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-152.88141,-868.92732)" id="YB_DEF__path135" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath136">
          <path d="m 152.702,874.312 h 75.693 v -6.113 h -75.693 z" transform="translate(-152.88141,-868.92732)" id="YB_DEF__path136" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath138">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path138" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath140">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-217.08841,-807.19832)" id="YB_DEF__path140" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath142">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-231.634,-530.41561)" id="YB_DEF__path142" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath144">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-232.2037,-551.71072)" id="YB_DEF__path144" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath145">
          <path d="m 225.126,550.242 h 17.616 v -17.771 h -17.616 z" transform="translate(-234.39961,-549.90712)" id="YB_DEF__path145" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath147">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path147" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath149">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-255.05061,-557.01562)" id="YB_DEF__path149" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath151">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-258.10741,-558.15232)" id="YB_DEF__path151" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath153">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-261.10161,-558.70901)" id="YB_DEF__path153" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath154">
          <path d="m 254.645,562.241 h 1.751 v -1.75 h -1.751 z" transform="translate(-255.61461,-562.23592)" id="YB_DEF__path154" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath156">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path156" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath157">
          <path d="m 241.518,535.786 h 1.75 v -1.75 h -1.75 z" transform="translate(-242.4871,-535.78111)" id="YB_DEF__path157" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath159">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path159" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath161">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-161.21601,-520.69261)" id="YB_DEF__path161" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath163">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-152.5413,-548.12482)" id="YB_DEF__path163" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath164">
          <path d="m 154.153,546.932 h 16.928 v -17.999 h -16.928 z" transform="translate(-154.15341,-546.93181)" id="YB_DEF__path164" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath166">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path166" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath168">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-138.17391,-548.32201)" id="YB_DEF__path168" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath170">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-135.2304,-548.75242)" id="YB_DEF__path170" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath172">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-132.8695,-549.21322)" id="YB_DEF__path172" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath173">
          <path d="m 141.136,559.621 h 1.75 v -1.75 h -1.75 z" transform="translate(-142.8847,-558.79171)" id="YB_DEF__path173" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath175">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path175" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath176">
          <path d="m 152.777,532.48 h 1.751 v -1.751 h -1.751 z" transform="translate(-154.52661,-531.65032)" id="YB_DEF__path176" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath178">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path178" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath179">
          <path d="M 86.2793,802.541 H 106.519 V 772.743 H 86.2793 Z" transform="translate(-86.588605,-773.32072)" id="YB_DEF__path179" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath181">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path181" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath182">
          <path d="m 274.581,806.348 h 20.764 v -30.12 h -20.764 z" transform="translate(-281.6314,-805.98302)" id="YB_DEF__path182" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath184">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path184" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath186">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-192.52431,-1044.8503)" id="YB_DEF__path186" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath188">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-192.36351,-1045.0885)" id="YB_DEF__path188" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath190">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-188.3044,-1041.996)" id="YB_DEF__path190" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath192">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-190.9933,-1044.4281)" id="YB_DEF__path192" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath194">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-177.9552,-1068.7863)" id="YB_DEF__path194" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath196">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-199.6879,-1068.6879)" id="YB_DEF__path196" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath198">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-208.58761,-1063.2266)" id="YB_DEF__path198" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath200">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-208.58761,-1063.2266)" id="YB_DEF__path200" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath202">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-167.9539,-1063.9413)" id="YB_DEF__path202" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath204">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-157.7236,-1069.3206)" id="YB_DEF__path204" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath206">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-221.88801,-1077.1522)" id="YB_DEF__path206" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath208">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-173.7559,-1018.0059)" id="YB_DEF__path208" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath210">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-216.4687,-1066.8376)" id="YB_DEF__path210" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath212">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-178.8648,-1067.9938)" id="YB_DEF__path212" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath214">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-149.1898,-1048.2435)" id="YB_DEF__path214" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath216">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-149.0686,-1044.7021)" id="YB_DEF__path216" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath218">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-231.3316,-1049.4948)" id="YB_DEF__path218" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath220">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-231.69601,-1045.9702)" id="YB_DEF__path220" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath222">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-200.01801,-790.61362)" id="YB_DEF__path222" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath223">
          <path d="m 191.241,790.414 h 59.521 v -44.729 h -59.521 z" transform="translate(-198.4068,-790.41392)" id="YB_DEF__path223" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath225">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path225" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath227">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-176.45241,-793.46272)" id="YB_DEF__path227" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath228">
          <path d="m 122.215,793.484 h 61.636 v -44.729 h -61.636 z" transform="translate(-176.45241,-793.46272)" id="YB_DEF__path228" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath230">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path230" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath232">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-189.1029,-787.67372)" id="YB_DEF__path232" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath233">
          <path d="m 233.756,648.798 h 14.181 v -96.95 h -14.181 z" transform="translate(-234.4687,-647.52952)" id="YB_DEF__path233" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath235">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path235" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath237">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-162.3711,-1020.048)" id="YB_DEF__path237" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath239">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-430.56681,-1011.3279)" id="YB_DEF__path239" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath241">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-474.99931,-984.76242)" id="YB_DEF__path241" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath243">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-475.39201,-980.82792)" id="YB_DEF__path243" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath245">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-809.74195,-1169.7664)" id="YB_DEF__path245" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath247">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-861.51115,-1169.8176)" id="YB_DEF__path247" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath249">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-870.4816,-960.05492)" id="YB_DEF__path249" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath251">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-802.6075,-955.97582)" id="YB_DEF__path251" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath253">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-874.48292,-940.17002)" id="YB_DEF__path253" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath255">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-875.05262,-961.46513)" id="YB_DEF__path255" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath256">
          <path d="m 867.975,959.997 h 17.616 v -17.772 h -17.616 z" transform="translate(-877.24855,-959.66162)" id="YB_DEF__path256" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath258">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path258" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath260">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-897.8995,-966.77003)" id="YB_DEF__path260" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath262">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-900.95642,-967.90673)" id="YB_DEF__path262" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath264">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-903.9505,-968.46342)" id="YB_DEF__path264" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath265">
          <path d="m 897.494,971.995 h 1.751 v -1.75 h -1.751 z" transform="translate(-898.46365,-971.99033)" id="YB_DEF__path265" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath267">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path267" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath268">
          <path d="m 884.367,945.541 h 1.75 v -1.751 h -1.75 z" transform="translate(-885.33602,-945.53552)" id="YB_DEF__path268" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath270">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path270" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath272">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-804.0649,-930.44702)" id="YB_DEF__path272" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath274">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-795.39024,-957.87923)" id="YB_DEF__path274" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath275">
          <path d="M 797.002,956.686 H 813.93 V 938.687 H 797.002 Z" transform="translate(-797.00244,-956.68622)" id="YB_DEF__path275" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath277">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path277" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath279">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-781.02294,-958.07642)" id="YB_DEF__path279" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath281">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-778.07934,-958.50683)" id="YB_DEF__path281" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath283">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-775.71842,-958.96763)" id="YB_DEF__path283" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath284">
          <path d="m 783.985,969.376 h 1.75 v -1.751 h -1.75 z" transform="translate(-785.73362,-968.54612)" id="YB_DEF__path284" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath286">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path286" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath287">
          <path d="m 795.626,942.234 h 1.751 v -1.75 h -1.751 z" transform="translate(-797.37549,-941.40473)" id="YB_DEF__path287" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath289">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path289" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath291">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-842.8669,-1200.3679)" id="YB_DEF__path291" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath293">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-819.3013,-1203.2172)" id="YB_DEF__path293" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath295">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-433.53031,-990.40673)" id="YB_DEF__path295" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath296">
          <path d="m 621.869,727.422 h 5.692 v -4.26 h -5.692 z" transform="translate(-624.71591,-727.42212)" id="YB_DEF__path296" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath298">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path298" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath299">
          <path d="m 627.438,464.716 h 5.692 v -4.26 h -5.692 z" transform="translate(-630.28481,-464.71601)" id="YB_DEF__path299" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath301">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path301" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath303">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-442.91491,-766.30462)" id="YB_DEF__path303" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath305">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-441.10921,-897.58652)" id="YB_DEF__path305" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath307">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-478.94871,-729.09692)" id="YB_DEF__path307" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath309">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-493.21321,-479.34791)" id="YB_DEF__path309" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath311">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-495.06441,-472.93551)" id="YB_DEF__path311" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath313">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-485.95361,-448.81801)" id="YB_DEF__path313" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath315">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-478.12351,-479.95811)" id="YB_DEF__path315" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath316">
          <path d="m 479.648,478.578 h 16.005 V 457.97 h -16.005 z" transform="translate(-479.64781,-478.57811)" id="YB_DEF__path316" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath318">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path318" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath320">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-464.35421,-480.48001)" id="YB_DEF__path320" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath322">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-461.54021,-481.02701)" id="YB_DEF__path322" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath324">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-459.28521,-481.59631)" id="YB_DEF__path324" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath325">
          <path d="m 467.378,493.152 h 1.678 v -1.975 h -1.678 z" transform="translate(-469.05531,-492.19781)" id="YB_DEF__path325" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath327">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path327" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath328">
          <path d="m 478.057,462.278 h 1.679 v -1.975 h -1.679 z" transform="translate(-479.73501,-461.32401)" id="YB_DEF__path328" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath330">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path330" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath332">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-448.76561,-919.72943)" id="YB_DEF__path332" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath334">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-443.47811,-952.67772)" id="YB_DEF__path334" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath336">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-467.85201,-950.12933)" id="YB_DEF__path336" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath338">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-473.34501,-922.21692)" id="YB_DEF__path338" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath339">
          <path d="m 506.767,874.815 h 5.692 v -4.26 h -5.692 z" transform="translate(-509.61391,-874.81512)" id="YB_DEF__path339" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath341">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path341" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath342">
          <path d="m 393.08,715.275 h 5.692 v -4.26 h -5.692 z" transform="translate(-395.92741,-715.27532)" id="YB_DEF__path342" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath344">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path344" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath345">
          <path d="m 398.649,452.569 h 5.692 v -4.26 h -5.692 z" transform="translate(-401.49631,-452.56931)" id="YB_DEF__path345" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath347">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path347" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath349">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-439.86691,-997.53332)" id="YB_DEF__path349" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath351">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-442.38571,-991.73052)" id="YB_DEF__path351" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath353">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-453.51921,-995.49642)" id="YB_DEF__path353" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath355">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-429.91601,-1020.1306)" id="YB_DEF__path355" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath357">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-435.49881,-954.34862)" id="YB_DEF__path357" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath359">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-456.32211,-1001.3821)" id="YB_DEF__path359" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath361">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-514.78001,-735.45242)" id="YB_DEF__path361" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath363">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-514.78001,-735.45242)" id="YB_DEF__path363" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath365">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-448.16751,-919.03812)" id="YB_DEF__path365" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath367">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-442.90871,-780.31922)" id="YB_DEF__path367" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath368">
          <path d="m 442.693,785.704 h 62.144 v -6.103 h -62.144 z" transform="translate(-442.90871,-780.31922)" id="YB_DEF__path368" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath370">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path370" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath372">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-487.09731,-804.82262)" id="YB_DEF__path372" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath374">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-480.82251,-875.53602)" id="YB_DEF__path374" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath376">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-460.67161,-893.17062)" id="YB_DEF__path376" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath378">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-476.65661,-888.07872)" id="YB_DEF__path378" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath380">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-476.83681,-714.24212)" id="YB_DEF__path380" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath382">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-495.41381,-725.54962)" id="YB_DEF__path382" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath384">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-482.65151,-707.13492)" id="YB_DEF__path384" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath386">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-486.74741,-707.67882)" id="YB_DEF__path386" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath388">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-491.38861,-712.79472)" id="YB_DEF__path388" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath390">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-494.74021,-717.14502)" id="YB_DEF__path390" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath392">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-449.14281,-872.55272)" id="YB_DEF__path392" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath394">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-465.66521,-869.14832)" id="YB_DEF__path394" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath396">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-434.90541,-831.31892)" id="YB_DEF__path396" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath398">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-462.44271,-825.64502)" id="YB_DEF__path398" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath400">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-478.73811,-722.72602)" id="YB_DEF__path400" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath402">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-453.48401,-940.47782)" id="YB_DEF__path402" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath404">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-907.05872,-599.08091)" id="YB_DEF__path404" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath406">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-904.73155,-609.58292)" id="YB_DEF__path406" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath408">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-904.0081,-628.14652)" id="YB_DEF__path408" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath410">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-863.12762,-582.78412)" id="YB_DEF__path410" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath412">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-871.2307,-585.46432)" id="YB_DEF__path412" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath414">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-858.17102,-585.70541)" id="YB_DEF__path414" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath416">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-868.7224,-582.27751)" id="YB_DEF__path416" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath417">
          <path d="m 820.053,621.374 h 91.835 v -30.78 h -91.835 z" transform="translate(-833.26532,-602.52941)" id="YB_DEF__path417" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath418">
          <path d="m 820.053,621.374 h 91.835 v -30.78 h -91.835 z" transform="translate(-856.4902,-604.67492)" id="YB_DEF__path418" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath419">
          <path d="m 820.053,621.374 h 91.835 v -30.78 h -91.835 z" transform="translate(-898.5925,-605.37802)" id="YB_DEF__path419" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath420">
          <path d="m 820.053,621.374 h 91.835 v -30.78 h -91.835 z" transform="translate(-856.90292,-606.14762)" id="YB_DEF__path420" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath421">
          <path d="m 820.053,621.374 h 91.835 v -30.78 h -91.835 z" transform="translate(-898.18165,-602.20361)" id="YB_DEF__path421" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath427">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path427" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath429">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-819.17462,-600.34702)" id="YB_DEF__path429" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath431">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-822.97255,-610.04662)" id="YB_DEF__path431" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath433">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-825.3577,-613.42631)" id="YB_DEF__path433" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath435">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-827.81545,-633.14201)" id="YB_DEF__path435" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath437">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-828.85765,-638.98382)" id="YB_DEF__path437" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath439">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-834.41695,-645.57272)" id="YB_DEF__path439" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath441">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-839.31655,-643.89902)" id="YB_DEF__path441" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath443">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-829.4596,-643.67452)" id="YB_DEF__path443" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath445">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-867.89515,-634.18052)" id="YB_DEF__path445" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath447">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-893.6905,-635.62202)" id="YB_DEF__path447" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath449">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-897.85442,-628.88852)" id="YB_DEF__path449" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath451">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-899.93282,-626.46982)" id="YB_DEF__path451" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath453">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-901.55875,-640.89952)" id="YB_DEF__path453" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath455">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-898.5607,-640.87982)" id="YB_DEF__path455" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath457">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-835.53745,-649.14832)" id="YB_DEF__path457" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath459">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-855.14395,-659.51812)" id="YB_DEF__path459" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath461">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-859.4848,-662.63602)" id="YB_DEF__path461" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath463">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-827.30515,-637.14932)" id="YB_DEF__path463" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath465">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-830.86405,-645.61751)" id="YB_DEF__path465" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath467">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-843.75902,-660.18701)" id="YB_DEF__path467" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath469">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-861.49975,-661.45562)" id="YB_DEF__path469" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath471">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-906.32935,-629.28302)" id="YB_DEF__path471" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath473">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-907.5997,-635.80792)" id="YB_DEF__path473" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath475">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-884.82265,-662.46212)" id="YB_DEF__path475" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath477">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-895.14902,-666.01061)" id="YB_DEF__path477" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath479">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-892.7551,-666.67862)" id="YB_DEF__path479" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath481">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-890.9797,-667.06792)" id="YB_DEF__path481" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath483">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-890.03275,-667.26362)" id="YB_DEF__path483" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath485">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-889.20175,-667.30871)" id="YB_DEF__path485" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath487">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-888.07375,-667.35932)" id="YB_DEF__path487" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath489">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-886.83955,-667.16591)" id="YB_DEF__path489" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath491">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-881.617,-666.85072)" id="YB_DEF__path491" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath493">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-879.7297,-667.57271)" id="YB_DEF__path493" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath495">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-875.26202,-667.52552)" id="YB_DEF__path495" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath497">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-874.85762,-667.57352)" id="YB_DEF__path497" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath499">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-874.14482,-667.58672)" id="YB_DEF__path499" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath501">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-870.41305,-667.35521)" id="YB_DEF__path501" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath503">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-869.87935,-667.14782)" id="YB_DEF__path503" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath505">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-870.2446,-667.12402)" id="YB_DEF__path505" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath507">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-869.7397,-667.13321)" id="YB_DEF__path507" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath509">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-868.31485,-667.15462)" id="YB_DEF__path509" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath511">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-867.45242,-667.14581)" id="YB_DEF__path511" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath513">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-866.5615,-667.16222)" id="YB_DEF__path513" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath515">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-865.49245,-667.18192)" id="YB_DEF__path515" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath517">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-864.3958,-667.32101)" id="YB_DEF__path517" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath519">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-863.77142,-667.33852)" id="YB_DEF__path519" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath521">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-862.26625,-666.90731)" id="YB_DEF__path521" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath523">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-861.09452,-666.21011)" id="YB_DEF__path523" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath525">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-860.88235,-665.97632)" id="YB_DEF__path525" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath527">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-861.49112,-666.05762)" id="YB_DEF__path527" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath529">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-860.10812,-665.79302)" id="YB_DEF__path529" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath531">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-859.2181,-666.09472)" id="YB_DEF__path531" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath533">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-855.0283,-666.81071)" id="YB_DEF__path533" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath535">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-854.19842,-666.91522)" id="YB_DEF__path535" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath537">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-853.06952,-666.93902)" id="YB_DEF__path537" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath539">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-849.6562,-665.60741)" id="YB_DEF__path539" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath541">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-850.9261,-665.94842)" id="YB_DEF__path541" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath543">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-849.3082,-665.93602)" id="YB_DEF__path543" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath545">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-847.86542,-665.62571)" id="YB_DEF__path545" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath547">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-847.72435,-665.43041)" id="YB_DEF__path547" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath549">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-845.7193,-665.16092)" id="YB_DEF__path549" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath551">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-845.3419,-665.11792)" id="YB_DEF__path551" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath553">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-840.28412,-665.28962)" id="YB_DEF__path553" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath555">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-839.64212,-665.34202)" id="YB_DEF__path555" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath557">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-836.61475,-666.22502)" id="YB_DEF__path557" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath559">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-833.53495,-664.97462)" id="YB_DEF__path559" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath561">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-830.28152,-662.94722)" id="YB_DEF__path561" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath563">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-829.24142,-662.57831)" id="YB_DEF__path563" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath565">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-828.2518,-660.75671)" id="YB_DEF__path565" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath567">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-828.04015,-660.80132)" id="YB_DEF__path567" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath569">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-826.79335,-660.39671)" id="YB_DEF__path569" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath571">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-826.0201,-658.95602)" id="YB_DEF__path571" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath573">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-825.96955,-658.37561)" id="YB_DEF__path573" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath575">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-833.7913,-646.24982)" id="YB_DEF__path575" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath577">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-822.98635,-613.46981)" id="YB_DEF__path577" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath579">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-835.021,-637.87292)" id="YB_DEF__path579" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath581">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-895.62685,-635.71772)" id="YB_DEF__path581" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath583">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-877.0576,-623.31341)" id="YB_DEF__path583" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath585">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-897.09002,-622.82402)" id="YB_DEF__path585" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath587">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-877.75405,-623.19491)" id="YB_DEF__path587" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath589">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-836.01842,-623.69542)" id="YB_DEF__path589" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath591">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-834.53965,-623.86211)" id="YB_DEF__path591" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath593">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-869.7982,-551.73022)" id="YB_DEF__path593" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath595">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-818.42432,-512.59471)" id="YB_DEF__path595" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath597">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-915.7762,-375.40301)" id="YB_DEF__path597" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath599">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-860.7616,-383.95961)" id="YB_DEF__path599" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath601">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-819.35462,-356.55411)" id="YB_DEF__path601" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath603">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-834.82502,-301.33193)" id="YB_DEF__path603" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath605">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-886.58635,-300.42758)" id="YB_DEF__path605" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath607">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-891.6832,-90.534902)" id="YB_DEF__path607" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath609">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-823.74542,-87.709502)" id="YB_DEF__path609" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath611">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-893.18342,-80.018627)" id="YB_DEF__path611" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath613">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-827.36282,-74.858177)" id="YB_DEF__path613" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath615">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-824.32885,-586.87582)" id="YB_DEF__path615" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath617">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-825.5134,-622.58872)" id="YB_DEF__path617" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath619">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-825.79645,-623.43022)" id="YB_DEF__path619" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath621">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-826.47032,-624.16082)" id="YB_DEF__path621" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath623">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-826.97995,-629.73262)" id="YB_DEF__path623" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath625">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-824.69905,-624.50321)" id="YB_DEF__path625" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath627">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-825.1522,-624.86192)" id="YB_DEF__path627" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath629">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-828.72865,-637.43542)" id="YB_DEF__path629" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath631">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-901.56932,-87.019877)" id="YB_DEF__path631" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath633">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-901.65992,-91.924202)" id="YB_DEF__path633" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath635">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-898.10185,-93.282077)" id="YB_DEF__path635" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath637">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-897.37772,-87.992027)" id="YB_DEF__path637" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath639">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-894.56342,-91.323227)" id="YB_DEF__path639" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath641">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-821.07715,-85.436627)" id="YB_DEF__path641" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath643">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-821.16775,-90.341027)" id="YB_DEF__path643" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath645">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-818.0461,-115.34138)" id="YB_DEF__path645" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath647">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-817.33202,-110.598)" id="YB_DEF__path647" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath649">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-814.5115,-113.5911)" id="YB_DEF__path649" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath651">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-869.75095,-343.45141)" id="YB_DEF__path651" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath652">
          <path d="m 862.057,343.45 h 58.668 v -46.965 h -58.668 z" transform="translate(-869.8171,-343.44911)" id="YB_DEF__path652" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath654">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path654" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath656">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-853.25605,-345.21121)" id="YB_DEF__path656" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath657">
          <path d="m 799.634,346.047 h 60.717 v -46.962 h -60.717 z" transform="translate(-853.25605,-345.21121)" id="YB_DEF__path657" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath659">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path659" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath661">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-696.64372,-382.88841)" id="YB_DEF__path661" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath663">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-680.25641,-402.95031)" id="YB_DEF__path663" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath665">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-690.68842,-380.64281)" id="YB_DEF__path665" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath667">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-685.53172,-382.72821)" id="YB_DEF__path667" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath669">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-680.98582,-389.02151)" id="YB_DEF__path669" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath671">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-677.90372,-394.16831)" id="YB_DEF__path671" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath673">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-975.0781,-458.38311)" id="YB_DEF__path673" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath675">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-926.08975,-513.50572)" id="YB_DEF__path675" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath677">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1022.6778,-378.35141)" id="YB_DEF__path677" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath679">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1042.5754,-393.24071)" id="YB_DEF__path679" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath681">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1030.4685,-371.97591)" id="YB_DEF__path681" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath683">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1035.1542,-373.20441)" id="YB_DEF__path683" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath685">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1039.8138,-379.23351)" id="YB_DEF__path685" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath687">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1043.0838,-384.26301)" id="YB_DEF__path687" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath689">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-754.14909,-466.47131)" id="YB_DEF__path689" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath691">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-804.50162,-519.93511)" id="YB_DEF__path691" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath693">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-814.85395,-488.42171)" id="YB_DEF__path693" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath695">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-806.65742,-498.69501)" id="YB_DEF__path695" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath697">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-908.86285,-515.13622)" id="YB_DEF__path697" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath699">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-918.18932,-512.42641)" id="YB_DEF__path699" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath700">
          <path d="m 902.856,613.158 h 1.403 v -2.867 h -1.403 z" transform="translate(-902.93035,-612.13972)" id="YB_DEF__path700" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath702">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path702" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath703">
          <path d="m 904.122,628.347 h 1.3 v -2.124 h -1.3 z" transform="translate(-904.49125,-628.10471)" id="YB_DEF__path703" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath705">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path705" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath706">
          <path d="m 904.126,630.483 h 1.453 v -5.27 h -1.453 z" transform="translate(-904.5781,-629.98331)" id="YB_DEF__path706" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath708">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path708" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath709">
          <path d="m 902.477,638.245 h 1.571 v -3.497 h -1.571 z" transform="translate(-903.05822,-637.88021)" id="YB_DEF__path709" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath711">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path711" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath712">
          <path d="m 901.303,640.694 h 2.779 v -5.546 h -2.779 z" transform="translate(-901.32805,-640.06031)" id="YB_DEF__path712" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath714">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path714" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath715">
          <path d="m 828.629,653.445 h 10.614 v -10.266 h -10.614 z" transform="translate(-838.64545,-653.40581)" id="YB_DEF__path715" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath717">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path717" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath718">
          <path d="M 828.574,651.929 H 905.4 v -26.484 h -76.826 z" transform="translate(-904.26025,-628.36072)" id="YB_DEF__path718" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath720">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path720" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath721">
          <path d="m 831.825,651.059 h 2.474 v -2.602 h -2.474 z" transform="translate(-832.67582,-648.60022)" id="YB_DEF__path721" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath723">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path723" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath724">
          <path d="m 830.81,651.39 h 4.394 v -2.829 h -4.394 z" transform="translate(-834.17845,-651.34811)" id="YB_DEF__path724" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath726">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path726" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath727">
          <path d="m 845.982,648.615 h 1.121 v -1.174 h -1.121 z" transform="translate(-846.10322,-648.11462)" id="YB_DEF__path727" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath729">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path729" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath730">
          <path d="m 831.97,651.162 h 2.598 v -2.725 h -2.598 z" transform="translate(-833.71472,-651.01511)" id="YB_DEF__path730" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath732">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path732" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath733">
          <path d="m 844.596,659.465 h 4.05 v -2.191 h -4.05 z" transform="translate(-844.83752,-658.53971)" id="YB_DEF__path733" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath735">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path735" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath736">
          <path d="m 844.414,659.978 h 2.507 v -2.853 h -2.507 z" transform="translate(-846.2842,-659.95612)" id="YB_DEF__path736" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath738">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path738" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath739">
          <path d="m 826.652,661.167 h 50.475 v -16.978 h -50.475 z" transform="translate(-845.83045,-658.96192)" id="YB_DEF__path739" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath741">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path741" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath742">
          <path d="m 901.966,637.43 h 3.885 v -12.258 h -3.885 z" transform="translate(-902.8663,-636.44651)" id="YB_DEF__path742" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath744">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path744" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath746">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-887.28452,-60.320177)" id="YB_DEF__path746" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath748">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-888.24722,-81.601127)" id="YB_DEF__path748" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath749">
          <path d="m 880.917,79.9386 h 17.84 V 62.1963 h -17.84 z" transform="translate(-890.4094,-79.757327)" id="YB_DEF__path749" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath751">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path751" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath753">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-911.188,-86.483402)" id="YB_DEF__path753" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath755">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-914.2654,-87.563477)" id="YB_DEF__path755" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath757">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-917.2693,-88.064777)" id="YB_DEF__path757" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath758">
          <path d="m 910.863,91.6995 h 1.751 V 89.949 h -1.751 z" transform="translate(-911.84845,-91.692377)" id="YB_DEF__path758" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath760">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path760" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath761">
          <path d="M 897.25,65.4915 H 899 v -1.7504 h -1.75 z" transform="translate(-898.23475,-65.484527)" id="YB_DEF__path761" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath763">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path763" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath765">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-824.54672,-52.159801)" id="YB_DEF__path765" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath767">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-816.3799,-79.747502)" id="YB_DEF__path767" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath768">
          <path d="m 817.97,78.5249 h 16.693 V 60.2677 H 817.97 Z" transform="translate(-817.96975,-78.524927)" id="YB_DEF__path768" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath770">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path770" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath772">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-802.0186,-80.209802)" id="YB_DEF__path772" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath774">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-799.08362,-80.694527)" id="YB_DEF__path774" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath776">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-796.73162,-81.198827)" id="YB_DEF__path776" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath777">
          <path d="m 805.172,91.4364 h 1.75 v -1.7502 h -1.75 z" transform="translate(-806.9218,-90.590777)" id="YB_DEF__path777" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath779">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path779" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath780">
          <path d="m 816.311,64.0848 h 1.75 v -1.7503 h -1.75 z" transform="translate(-818.06072,-63.239177)" id="YB_DEF__path780" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath782">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path782" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath783">
          <path d="m 887.627,306.031 h 35.739 v -34.048 h -35.739 z" transform="translate(-915.5851,-306.03053)" id="YB_DEF__path783" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath785">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path785" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath786">
          <path d="m 798.809,311.719 h 35.869 v -35.733 h -35.869 z" transform="translate(-807.24332,-311.71928)" id="YB_DEF__path786" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath788">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path788" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath789">
          <path d="m 671.02,394.348 h 29.287 V 371.179 H 671.02 Z" transform="translate(-671.01982,-377.21061)" id="YB_DEF__path789" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath791">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path791" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath792">
          <path d="m 1022.92,385.48 h 28.72 v -23.855 h -28.72 z" transform="translate(-1025.1732,-385.46671)" id="YB_DEF__path792" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath794">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path794" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath796">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-857.0746,-325.25408)" id="YB_DEF__path796" />
        </clipPath>
        <mask maskUnits="userSpaceOnUse" x="0" y="0" width="1" height="1" id="YB_DEF__mask796">
          <image width="1" height="1"  preserveAspectRatio="none" xlinkHref="data:image/png;base64,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" transform="matrix(157.33333,0,0,225.33333,1041.3333,525.33333)" id="YB_DEF__image796" clipPath="url(#YB_DEF__clipPath797)" />
        </mask>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath797">
          <path d="M 781,686 H 899 V 517 H 781 Z" transform="matrix(0.00847458,0,0,-0.00591716,-6.618644,4.0591717)" id="YB_DEF__path797" />
        </clipPath>
        <mask maskUnits="userSpaceOnUse" x="0" y="0" width="1" height="1" id="YB_DEF__mask797">
          <image width="1" height="1"  preserveAspectRatio="none" xlinkHref="data:image/png;base64,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" id="YB_DEF__image797" />
        </mask>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath798">
          <path d="M 781,686 H 899 V 517 H 781 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path798" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath799">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path799" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath800">
          <path d="m 863.995,553.208 h 9.728 v -22.543 h -9.728 z" transform="translate(-866.3266,-553.02961)" id="YB_DEF__path800" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath802">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path802" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath803">
          <path d="m 873.946,632.601 h 30.901 V 582.69 h -30.901 z" transform="translate(-873.94592,-607.64522)" id="YB_DEF__path803" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath805">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path805" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath806">
          <path d="m 1050.42,315.283 h 5.69 v -4.259 h -5.69 z" transform="translate(-1053.2649,-315.28261)" id="YB_DEF__path806" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath808">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path808" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath809">
          <path d="m 1055.99,52.6749 h 5.69 v -4.2585 h -5.69 z" transform="translate(-1058.8338,-52.674901)" id="YB_DEF__path809" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath811">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path811" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath813">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-867.28285,-330.54791)" id="YB_DEF__path813" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath815">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-863.84252,-524.89612)" id="YB_DEF__path815" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath817">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-867.5731,-525.98371)" id="YB_DEF__path817" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath819">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-890.02975,-574.32671)" id="YB_DEF__path819" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath821">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-847.8064,-597.70252)" id="YB_DEF__path821" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath823">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-845.68232,-603.33422)" id="YB_DEF__path823" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath825">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-853.69375,-609.32002)" id="YB_DEF__path825" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath827">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-853.69375,-609.32002)" id="YB_DEF__path827" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath829">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-889.41835,-597.70252)" id="YB_DEF__path829" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath831">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-887.29532,-603.33422)" id="YB_DEF__path831" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath833">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-895.3024,-609.23222)" id="YB_DEF__path833" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath835">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-895.3024,-609.23222)" id="YB_DEF__path835" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath837">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-367.94631,-589.08091)" id="YB_DEF__path837" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath839">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-366.49401,-599.58671)" id="YB_DEF__path839" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath841">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-286.64401,-590.81671)" id="YB_DEF__path841" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath843">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-288.09621,-601.32251)" id="YB_DEF__path843" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath845">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-367.34151,-618.05582)" id="YB_DEF__path845" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath847">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-332.55991,-542.71271)" id="YB_DEF__path847" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath849">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-281.75781,-502.56221)" id="YB_DEF__path849" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath851">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-379.10971,-365.31921)" id="YB_DEF__path851" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath853">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-323.62981,-348.66961)" id="YB_DEF__path853" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath855">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-282.68811,-346.46321)" id="YB_DEF__path855" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath857">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-300.45931,-312.10478)" id="YB_DEF__path857" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath859">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-350.00481,-311.19998)" id="YB_DEF__path859" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath861">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-358.98101,-101.72378)" id="YB_DEF__path861" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath863">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-285.37971,-98.402327)" id="YB_DEF__path863" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath865">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-360.98261,-90.490502)" id="YB_DEF__path865" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath867">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-288.99711,-85.546277)" id="YB_DEF__path867" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath869">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-245.60401,-330.51511)" id="YB_DEF__path869" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath871">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-220.95391,-338.49591)" id="YB_DEF__path871" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath873">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-241.8175,-325.39898)" id="YB_DEF__path873" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath875">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-236.35351,-324.35648)" id="YB_DEF__path875" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath877">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-229.1206,-327.18241)" id="YB_DEF__path877" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath879">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-223.73941,-329.83808)" id="YB_DEF__path879" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath881">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-397.41041,-425.59991)" id="YB_DEF__path881" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath883">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-394.54311,-499.30481)" id="YB_DEF__path883" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath885">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-383.39141,-333.51801)" id="YB_DEF__path885" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath887">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-408.22141,-332.40251)" id="YB_DEF__path887" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath889">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-385.36501,-323.64488)" id="YB_DEF__path889" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath891">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-389.76641,-321.62123)" id="YB_DEF__path891" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath893">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-397.19481,-323.32561)" id="YB_DEF__path893" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath895">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-402.91491,-325.13911)" id="YB_DEF__path895" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath897">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-248.59831,-431.95101)" id="YB_DEF__path897" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath899">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-262.17771,-504.19042)" id="YB_DEF__path899" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath901">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-277.4434,-474.20141)" id="YB_DEF__path901" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath903">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-271.50771,-485.93041)" id="YB_DEF__path903" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath905">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-372.67891,-504.97171)" id="YB_DEF__path905" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath907">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-380.49841,-498.34771)" id="YB_DEF__path907" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath908">
          <path d="m 295.159,641.079 h 2.473 v -2.604 h -2.473 z" transform="translate(-296.00931,-638.61881)" id="YB_DEF__path908" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath910">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path910" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath912">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-360.96481,-75.598277)" id="YB_DEF__path912" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath914">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-361.92751,-96.887177)" id="YB_DEF__path914" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath915">
          <path d="m 354.597,95.224 h 17.84 V 77.4751 h -17.84 z" transform="translate(-364.08971,-95.042702)" id="YB_DEF__path915" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath917">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path917" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath919">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-384.86841,-101.77133)" id="YB_DEF__path919" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath921">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-387.94571,-102.85178)" id="YB_DEF__path921" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath923">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-390.94961,-103.3533)" id="YB_DEF__path923" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath924">
          <path d="m 384.543,106.989 h 1.751 v -1.751 h -1.751 z" transform="translate(-385.52871,-106.98233)" id="YB_DEF__path924" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath926">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path926" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath927">
          <path d="m 370.93,80.7715 h 1.75 v -1.751 h -1.75 z" transform="translate(-371.91511,-80.764502)" id="YB_DEF__path927" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath929">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path929" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath931">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-280.47811,-66.761627)" id="YB_DEF__path931" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath933">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-272.31121,-94.359602)" id="YB_DEF__path933" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath934">
          <path d="m 273.901,93.1366 h 16.693 V 74.8725 h -16.693 z" transform="translate(-273.90111,-93.136577)" id="YB_DEF__path934" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath936">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path936" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath938">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-257.95,-94.822127)" id="YB_DEF__path938" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath940">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-255.01491,-95.306927)" id="YB_DEF__path940" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath942">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-252.66291,-95.811527)" id="YB_DEF__path942" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath943">
          <path d="m 261.103,106.053 h 1.751 v -1.751 h -1.751 z" transform="translate(-262.85311,-105.207)" id="YB_DEF__path943" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath945">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path945" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath946">
          <path d="m 272.242,78.691 h 1.751 v -1.7509 h -1.751 z" transform="translate(-273.99201,-77.845127)" id="YB_DEF__path946" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath948">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path948" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath949">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path949" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath950">
          <path d="m 226.833,341.213 h 20.179 v -29.92 h -20.179 z" transform="translate(-227.15131,-311.85128)" id="YB_DEF__path950" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath952">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path952" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath953">
          <path d="m 379.072,337.898 h 19.506 v -32.027 h -19.506 z" transform="translate(-389.83701,-337.43551)" id="YB_DEF__path953" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath955">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path955" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath957">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-77.913099,-337.93931)" id="YB_DEF__path957" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath958">
          <path d="m 329.468,542.358 h 11.057 v -22.551 h -11.057 z" transform="translate(-332.11741,-542.18021)" id="YB_DEF__path958" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath960">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path960" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath961">
          <path d="m 513.751,305.176 h 5.692 v -4.26 h -5.692 z" transform="translate(-516.59831,-305.17621)" id="YB_DEF__path961" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath963">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path963" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath964">
          <path d="m 519.32,42.4702 h 5.692 v -4.2601 h -5.692 z" transform="translate(-522.16732,-42.470176)" id="YB_DEF__path964" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath966">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path966" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath968">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-364.90901,-622.54862)" id="YB_DEF__path968" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath970">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-288.5446,-621.12232)" id="YB_DEF__path970" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath972">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-319.73271,-649.73702)" id="YB_DEF__path972" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath974">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-329.89111,-649.20212)" id="YB_DEF__path974" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath976">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-311.53471,-646.52792)" id="YB_DEF__path976" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath978">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-315.99011,-646.88452)" id="YB_DEF__path978" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath980">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-370.34651,-604.27451)" id="YB_DEF__path980" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath982">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-289.4356,-605.56702)" id="YB_DEF__path982" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath984">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-295.59411,-617.99741)" id="YB_DEF__path984" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath986">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-369.45541,-614.25842)" id="YB_DEF__path986" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath988">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-368.72691,-624.53951)" id="YB_DEF__path988" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath990">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-365.89111,-632.62172)" id="YB_DEF__path990" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath992">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-360.90101,-637.61362)" id="YB_DEF__path992" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath994">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-356.98021,-641.00111)" id="YB_DEF__path994" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath996">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-334.34651,-650.09362)" id="YB_DEF__path996" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath998">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-339.33661,-650.80672)" id="YB_DEF__path998" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1000">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-344.86141,-648.31072)" id="YB_DEF__path1000" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1002">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-353.05941,-642.07082)" id="YB_DEF__path1002" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1004">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-349.13861,-643.31882)" id="YB_DEF__path1004" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1005">
          <path d="m 348.404,643.866 h 16.339 v -26.539 h -16.339 z" transform="translate(-348.60401,-643.40792)" id="YB_DEF__path1005" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1007">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1007" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1008">
          <path d="m 355.927,618.906 h 6.815 v -10.687 h -6.815 z" transform="translate(-356.12681,-618.44812)" id="YB_DEF__path1008" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1010">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1010" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1011">
          <path d="m 362.628,613.608 h 3.585 v -5.02 h -3.585 z" transform="translate(-362.81681,-613.14542)" id="YB_DEF__path1011" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1013">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1013" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1014">
          <path d="m 362.896,616.263 h 3.585 v -5.021 h -3.585 z" transform="translate(-363.08451,-615.80021)" id="YB_DEF__path1014" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1016">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1016" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1017">
          <path d="m 360.534,617.467 h 3.585 v -5.021 h -3.585 z" transform="translate(-360.72311,-617.00372)" id="YB_DEF__path1017" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1019">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1019" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1021">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-290.32671,-616.42751)" id="YB_DEF__path1021" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1023">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-300.93071,-568.03811)" id="YB_DEF__path1023" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1025">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-305.65351,-567.32501)" id="YB_DEF__path1025" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1027">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-310.19801,-566.96842)" id="YB_DEF__path1027" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1029">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-320.53471,-569.10781)" id="YB_DEF__path1029" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1031">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-315.99011,-566.61181)" id="YB_DEF__path1031" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1033">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-324.45541,-567.23581)" id="YB_DEF__path1033" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1035">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-305.38611,-570.68272)" id="YB_DEF__path1035" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1037">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-329.80201,-566.43352)" id="YB_DEF__path1037" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1039">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-335.68321,-566.61181)" id="YB_DEF__path1039" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1041">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-340.76241,-567.77071)" id="YB_DEF__path1041" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1043">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-346.10891,-567.23581)" id="YB_DEF__path1043" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1045">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-351.36631,-569.46442)" id="YB_DEF__path1045" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1047">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-360.09901,-568.12732)" id="YB_DEF__path1047" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1049">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-334.25741,-569.07811)" id="YB_DEF__path1049" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1051">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-368.47531,-593.26541)" id="YB_DEF__path1051" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1053">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-368.20791,-583.10311)" id="YB_DEF__path1053" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1055">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-366.87131,-574.34491)" id="YB_DEF__path1055" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1057">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-289.87881,-595.95431)" id="YB_DEF__path1057" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1059">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-291.3046,-571.95271)" id="YB_DEF__path1059" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1060">
          <path d="m 286.79,611.357 h 5.219 v -16.729 h -5.219 z" transform="translate(-291.11001,-610.90762)" id="YB_DEF__path1060" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1062">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1062" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1064">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-289.46701,-588.46672)" id="YB_DEF__path1064" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1066">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-289.7464,-582.21172)" id="YB_DEF__path1066" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1068">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-290.281,-576.77401)" id="YB_DEF__path1068" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1070">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-290.68321,-626.20342)" id="YB_DEF__path1070" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1072">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-294.06931,-632.80001)" id="YB_DEF__path1072" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1074">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-298.1683,-639.39652)" id="YB_DEF__path1074" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1076">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-302.80201,-640.28801)" id="YB_DEF__path1076" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1078">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-324.18811,-652.38161)" id="YB_DEF__path1078" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1080">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-306.36631,-643.31882)" id="YB_DEF__path1080" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1081">
          <path d="M 293.034,560.773 H 360.93 V 544.371 H 293.034 Z" transform="translate(-317.11081,-560.06962)" id="YB_DEF__path1081" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1083">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1083" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1084">
          <path d="m 365.119,594.023 h 5.219 v -12.247 h -5.219 z" transform="translate(-369.43911,-593.69441)" id="YB_DEF__path1084" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1086">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1086" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1088">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-296.74261,-568.12732)" id="YB_DEF__path1088" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1089">
          <path d="m 283.584,596.876 h 5.219 v -15.868 h -5.219 z" transform="translate(-287.9044,-596.44981)" id="YB_DEF__path1089" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1091">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1091" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1092">
          <path d="m 356.624,570.267 h 7.886 V 557.92 h -7.886 z" transform="translate(-356.62371,-559.41961)" id="YB_DEF__path1092" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1094">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1094" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1095">
          <path d="m 289.213,569.821 h 7.797 v -12.747 h -7.797 z" transform="translate(-297.00991,-558.63262)" id="YB_DEF__path1095" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1097">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1097" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1099">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-375.36931,-97.982027)" id="YB_DEF__path1099" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1101">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-375.36931,-97.982027)" id="YB_DEF__path1101" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1103">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-269.9692,-95.468027)" id="YB_DEF__path1103" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1105">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-334.03021,-285.59753)" id="YB_DEF__path1105" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1107">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-325.91101,-513.83452)" id="YB_DEF__path1107" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1109">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-329.71291,-515.69311)" id="YB_DEF__path1109" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1111">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-563.58581,-356.20551)" id="YB_DEF__path1111" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1113">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-556.53922,-487.58421)" id="YB_DEF__path1113" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1115">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-599.61961,-318.99773)" id="YB_DEF__path1115" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1117">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-613.88411,-69.248777)" id="YB_DEF__path1117" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1119">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-615.73541,-62.836427)" id="YB_DEF__path1119" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1121">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-606.62462,-38.718826)" id="YB_DEF__path1121" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1123">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-598.79441,-69.858977)" id="YB_DEF__path1123" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1124">
          <path d="m 600.319,68.479 h 16.005 V 47.8707 h -16.005 z" transform="translate(-600.31871,-68.478977)" id="YB_DEF__path1124" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1126">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1126" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1128">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-585.02521,-70.380902)" id="YB_DEF__path1128" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1130">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-582.21112,-70.927877)" id="YB_DEF__path1130" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1132">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-579.95611,-71.497202)" id="YB_DEF__path1132" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1133">
          <path d="m 588.049,83.0531 h 1.678 v -1.9756 h -1.678 z" transform="translate(-589.72631,-82.098602)" id="YB_DEF__path1133" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1135">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1135" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1136">
          <path d="m 598.728,52.1794 h 1.678 v -1.9757 h -1.678 z" transform="translate(-600.40592,-51.224926)" id="YB_DEF__path1136" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1138">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1138" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1139">
          <path d="m 778.33,4.66179 h 5.692 V 0.40332 h -5.692 z" transform="translate(-781.17722,-4.6617751)" id="YB_DEF__path1139" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1141">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1141" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1143">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-596.95051,-565.08802)" id="YB_DEF__path1143" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1145">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-594.62341,-576.94231)" id="YB_DEF__path1145" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1147">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-560.96531,-545.62511)" id="YB_DEF__path1147" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1148">
          <path d="m 549.239,579.223 h 3.581 v -1.8 h -3.581 z" transform="translate(-549.45181,-578.77021)" id="YB_DEF__path1148" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1150">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1150" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1151">
          <path d="m 552.353,597.428 h 24.99 v -33.746 h -24.99 z" transform="translate(-576.84031,-580.30511)" id="YB_DEF__path1151" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1153">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1153" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1155">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-577.13861,-581.13461)" id="YB_DEF__path1155" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1157">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-557.44621,-599.88892)" id="YB_DEF__path1157" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1159">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-556.64902,-600.07712)" id="YB_DEF__path1159" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1161">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-587.18812,-539.46151)" id="YB_DEF__path1161" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1163">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-556.30241,-626.45212)" id="YB_DEF__path1163" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1165">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-551.58781,-625.40482)" id="YB_DEF__path1165" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1167">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-591.21871,-614.56382)" id="YB_DEF__path1167" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1169">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-553.44371,-616.82471)" id="YB_DEF__path1169" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1171">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-552.21301,-612.11222)" id="YB_DEF__path1171" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1173">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-552.80152,-617.79472)" id="YB_DEF__path1173" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1175">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-555.94061,-625.23212)" id="YB_DEF__path1175" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1177">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-559.42231,-623.99182)" id="YB_DEF__path1177" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1179">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-553.22332,-623.14391)" id="YB_DEF__path1179" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1181">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-575.95831,-613.07542)" id="YB_DEF__path1181" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1183">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-589.59341,-614.79332)" id="YB_DEF__path1183" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1185">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-592.30291,-607.04162)" id="YB_DEF__path1185" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1187">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-592.93511,-604.58092)" id="YB_DEF__path1187" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1189">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-595.26451,-619.97282)" id="YB_DEF__path1189" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1191">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-593.40721,-620.05322)" id="YB_DEF__path1191" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1193">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-557.68711,-629.97062)" id="YB_DEF__path1193" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1195">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-568.98911,-641.37761)" id="YB_DEF__path1195" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1197">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-570.63701,-644.76221)" id="YB_DEF__path1197" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1199">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-553.26961,-616.23112)" id="YB_DEF__path1199" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1201">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-555.36451,-626.19422)" id="YB_DEF__path1201" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1203">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-562.56052,-642.13271)" id="YB_DEF__path1203" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1205">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-572.34712,-643.86272)" id="YB_DEF__path1205" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1207">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-597.91501,-607.30052)" id="YB_DEF__path1207" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1209">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-598.60901,-614.61431)" id="YB_DEF__path1209" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1211">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-585.64981,-644.41472)" id="YB_DEF__path1211" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1213">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-590.94892,-648.56441)" id="YB_DEF__path1213" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1215">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-589.59712,-649.31852)" id="YB_DEF__path1215" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1217">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-588.59471,-649.75792)" id="YB_DEF__path1217" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1219">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-588.05992,-649.97882)" id="YB_DEF__path1219" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1221">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-587.59061,-650.02972)" id="YB_DEF__path1221" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1223">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-586.95371,-650.08672)" id="YB_DEF__path1223" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1225">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-585.38911,-649.35682)" id="YB_DEF__path1225" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1227">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-584.00422,-649.26572)" id="YB_DEF__path1227" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1229">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-582.64091,-650.27411)" id="YB_DEF__path1229" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1231">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-579.08621,-650.06632)" id="YB_DEF__path1231" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1233">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-579.49111,-650.32862)" id="YB_DEF__path1233" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1235">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-579.08861,-650.34341)" id="YB_DEF__path1235" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1237">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-576.34822,-649.87402)" id="YB_DEF__path1237" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1239">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-575.81231,-649.33622)" id="YB_DEF__path1239" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1241">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-576.88621,-649.82111)" id="YB_DEF__path1241" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1243">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-576.60121,-649.83172)" id="YB_DEF__path1243" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1245">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-575.39782,-649.80221)" id="YB_DEF__path1245" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1247">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-575.30962,-649.84582)" id="YB_DEF__path1247" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1249">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-574.80652,-649.86442)" id="YB_DEF__path1249" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1251">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-574.20281,-649.88672)" id="YB_DEF__path1251" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1253">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-573.58361,-650.04362)" id="YB_DEF__path1253" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1255">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-572.83231,-650.00981)" id="YB_DEF__path1255" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1257">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-571.74802,-649.36841)" id="YB_DEF__path1257" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1259">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-571.02331,-648.54262)" id="YB_DEF__path1259" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1261">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-570.90341,-648.27872)" id="YB_DEF__path1261" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1263">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-571.94351,-648.61751)" id="YB_DEF__path1263" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1265">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-570.63061,-648.17452)" id="YB_DEF__path1265" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1267">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-571.49551,-648.28052)" id="YB_DEF__path1267" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1269">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-568.29421,-649.46762)" id="YB_DEF__path1269" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1271">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-567.82561,-649.58542)" id="YB_DEF__path1271" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1273">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-566.78941,-649.55882)" id="YB_DEF__path1273" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1275">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-564.54571,-647.84662)" id="YB_DEF__path1275" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1277">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-566.15141,-648.50122)" id="YB_DEF__path1277" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1279">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-565.06421,-648.48022)" id="YB_DEF__path1279" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1281">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-563.38181,-647.61821)" id="YB_DEF__path1281" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1283">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-564.16991,-647.90951)" id="YB_DEF__path1283" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1285">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-562.50581,-647.46112)" id="YB_DEF__path1285" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1287">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-562.82461,-647.55682)" id="YB_DEF__path1287" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1289">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-559.33552,-647.54242)" id="YB_DEF__path1289" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1291">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-559.60612,-647.80982)" id="YB_DEF__path1291" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1293">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-557.26351,-648.59831)" id="YB_DEF__path1293" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1295">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-555.62572,-647.25071)" id="YB_DEF__path1295" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1297">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-553.66751,-645.29972)" id="YB_DEF__path1297" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1299">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-553.03691,-644.44312)" id="YB_DEF__path1299" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1301">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-552.52151,-642.82712)" id="YB_DEF__path1301" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1303">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-552.42532,-642.82622)" id="YB_DEF__path1303" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1305">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-551.65462,-641.98072)" id="YB_DEF__path1305" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1307">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-551.26141,-640.79462)" id="YB_DEF__path1307" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1309">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-551.25601,-640.08812)" id="YB_DEF__path1309" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1311">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-564.57431,-643.97902)" id="YB_DEF__path1311" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1313">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-554.59411,-631.23851)" id="YB_DEF__path1313" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1315">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-569.29711,-647.49952)" id="YB_DEF__path1315" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1317">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-578.38612,-650.11462)" id="YB_DEF__path1317" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1319">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-552.45541,-621.18011)" id="YB_DEF__path1319" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1321">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-601.82182,-623.39291)" id="YB_DEF__path1321" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1323">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-598.40591,-640.91132)" id="YB_DEF__path1323" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1325">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-597.51101,-649.24961)" id="YB_DEF__path1325" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1327">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-592.10891,-651.72392)" id="YB_DEF__path1327" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1329">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-585.33661,-651.72392)" id="YB_DEF__path1329" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1331">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-603.33662,-602.11952)" id="YB_DEF__path1331" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1333">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-604.13861,-632.64662)" id="YB_DEF__path1333" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1335">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-606.27722,-622.68881)" id="YB_DEF__path1335" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1337">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-564.97291,-571.44851)" id="YB_DEF__path1337" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1339">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-559.10021,-578.08031)" id="YB_DEF__path1339" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1341">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-570.16342,-580.64491)" id="YB_DEF__path1341" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1343">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-570.16342,-580.64491)" id="YB_DEF__path1343" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1345">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-594.69502,-512.02561)" id="YB_DEF__path1345" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1347">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-558.90101,-497.57421)" id="YB_DEF__path1347" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1349">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-606.32752,-415.87031)" id="YB_DEF__path1349" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1351">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-600.05272,-486.58371)" id="YB_DEF__path1351" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1353">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-584.30351,-494.18181)" id="YB_DEF__path1353" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1355">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-595.07531,-495.34411)" id="YB_DEF__path1355" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1357">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-614.35942,-71.642327)" id="YB_DEF__path1357" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1359">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-614.35942,-71.642327)" id="YB_DEF__path1359" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1361">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-594.43571,-320.53013)" id="YB_DEF__path1361" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1363">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-613.01261,-331.83771)" id="YB_DEF__path1363" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1365">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-600.25042,-313.42291)" id="YB_DEF__path1365" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1367">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-604.34632,-313.96688)" id="YB_DEF__path1367" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1369">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-608.98751,-319.08278)" id="YB_DEF__path1369" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1371">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-612.33911,-323.43301)" id="YB_DEF__path1371" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1373">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-610.22771,-336.40591)" id="YB_DEF__path1373" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1376">
          <path d="m 1769.76,828.956 h 4.51 v -2.236 h -4.51 z" transform="translate(-1774.2736,-828.95562)" id="YB_DEF__path1376" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1378">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1378" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1379">
          <path d="m 1691.58,831.191 h 4.51 v -4.471 h -4.51 z" transform="translate(-1693.8397,-831.19102)" id="YB_DEF__path1379" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1381">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1381" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1382">
          <path d="m 1511.65,62.4132 h 5.7 v -4.2584 h -5.7 z" transform="translate(-1511.6538,-60.285302)" id="YB_DEF__path1382" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1384">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1384" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1386">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1624.8585,-548.75441)" id="YB_DEF__path1386" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1387">
          <path d="M 1632.38,528.363 H 1685 v -9.911 h -52.62 z" transform="translate(-1632.3756,-524.45881)" id="YB_DEF__path1387" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1389">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1389" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1391">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1692.0258,-617.64011)" id="YB_DEF__path1391" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1393">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1667.5698,-613.26832)" id="YB_DEF__path1393" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1395">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1685.8332,-613.15942)" id="YB_DEF__path1395" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1397">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1668.2064,-613.17212)" id="YB_DEF__path1397" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1399">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1630.165,-612.92602)" id="YB_DEF__path1399" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1401">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1628.8147,-613.05311)" id="YB_DEF__path1401" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1403">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1662.1587,-549.65482)" id="YB_DEF__path1403" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1405">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1604.6104,-513.04792)" id="YB_DEF__path1405" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1407">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1658.151,-454.41421)" id="YB_DEF__path1407" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1409">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1658.6676,-446.89701)" id="YB_DEF__path1409" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1411">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1704.642,-343.32081)" id="YB_DEF__path1411" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1413">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1654.3641,-350.19271)" id="YB_DEF__path1413" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1415">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1604.557,-324.86483)" id="YB_DEF__path1415" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1417">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1690.8082,-276.87143)" id="YB_DEF__path1417" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1419">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1619.0275,-274.99673)" id="YB_DEF__path1419" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1421">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1700.8617,-90.060302)" id="YB_DEF__path1421" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1423">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1612.8948,-88.239377)" id="YB_DEF__path1423" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1425">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1691.8219,-75.969077)" id="YB_DEF__path1425" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1427">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1622.1057,-74.570027)" id="YB_DEF__path1427" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1429">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1620.1321,-579.17632)" id="YB_DEF__path1429" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1431">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1687.3522,-623.31512)" id="YB_DEF__path1431" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1433">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1660.1877,-588.73741)" id="YB_DEF__path1433" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1435">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1660.219,-588.73151)" id="YB_DEF__path1435" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1437">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1660.0399,-576.26512)" id="YB_DEF__path1437" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1439">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1638.472,-562.81951)" id="YB_DEF__path1439" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1441">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1641.2535,-594.45562)" id="YB_DEF__path1441" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1443">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1680.6315,-594.35081)" id="YB_DEF__path1443" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1445">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1688.91,-602.96501)" id="YB_DEF__path1445" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1447">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1649.532,-602.73392)" id="YB_DEF__path1447" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1449">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1678.0782,-600.23182)" id="YB_DEF__path1449" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1451">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1642.2037,-600.03821)" id="YB_DEF__path1451" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1453">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1618.4613,-590.90281)" id="YB_DEF__path1453" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1455">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1692.9865,-592.14322)" id="YB_DEF__path1455" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1457">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1642.1494,-553.45792)" id="YB_DEF__path1457" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1459">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1643.0532,-568.52002)" id="YB_DEF__path1459" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1461">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1645.5298,-555.57211)" id="YB_DEF__path1461" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1463">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1648.0071,-555.26422)" id="YB_DEF__path1463" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1465">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1651.5637,-554.63122)" id="YB_DEF__path1465" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1467">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1655.1277,-554.24311)" id="YB_DEF__path1467" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1469">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1660.2198,-553.73491)" id="YB_DEF__path1469" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1471">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1649.0581,-603.16352)" id="YB_DEF__path1471" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1473">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1688.3931,-603.16352)" id="YB_DEF__path1473" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1475">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1751.3323,-435.89491)" id="YB_DEF__path1475" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1477">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1736.8999,-501.97231)" id="YB_DEF__path1477" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1479">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1749.3561,-351.02591)" id="YB_DEF__path1479" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1481">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1771.8934,-353.28801)" id="YB_DEF__path1481" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1483">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1752.4381,-342.38381)" id="YB_DEF__path1483" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1485">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1756.6741,-341.13841)" id="YB_DEF__path1485" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1487">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1763.1478,-343.65281)" id="YB_DEF__path1487" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1489">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1768.0668,-346.04061)" id="YB_DEF__path1489" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1491">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1569.3633,-340.82221)" id="YB_DEF__path1491" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1493">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1546.6512,-347.27131)" id="YB_DEF__path1493" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1495">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1566.0829,-336.03771)" id="YB_DEF__path1495" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1497">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1561.1409,-334.90711)" id="YB_DEF__path1497" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1499">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1554.4608,-337.24031)" id="YB_DEF__path1499" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1501">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1549.4727,-339.47991)" id="YB_DEF__path1501" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1503">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1566.2001,-433.28931)" id="YB_DEF__path1503" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1505">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1578.8391,-500.00011)" id="YB_DEF__path1505" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1507">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1578.8391,-500.00011)" id="YB_DEF__path1507" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1508">
          <path d="m 1663.76,629.413 h 27.97 v -78.398 h -27.97 z" transform="translate(-1691.7274,-602.99332)" id="YB_DEF__path1508" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1510">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1510" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1512">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1604.038,-514.78871)" id="YB_DEF__path1512" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1514">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1591.6716,-512.90351)" id="YB_DEF__path1514" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1516">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1713.5631,-513.38021)" id="YB_DEF__path1516" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1518">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1725.9294,-511.49512)" id="YB_DEF__path1518" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1520">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1730.8608,-236.46608)" id="YB_DEF__path1520" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1522">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1673.4492,-236.44381)" id="YB_DEF__path1522" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1523">
          <path d="m 1655,346.9 h 73.86 V 300.488 H 1655 Z" transform="translate(-1655.004,-346.89951)" id="YB_DEF__path1523" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1525">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1525" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1527">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1636.5045,-234.60211)" id="YB_DEF__path1527" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1529">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1585.4358,-236.42573)" id="YB_DEF__path1529" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1530">
          <path d="M 1584.67,346.9 H 1655 v -46.321 h -70.33 z" transform="translate(-1655.004,-346.89951)" id="YB_DEF__path1530" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1532">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1532" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1533">
          <path d="m 1726.15,349.037 h 7.91 v -4.275 h -7.91 z" transform="translate(-1730.1027,-349.03741)" id="YB_DEF__path1533" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1535">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1535" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1536">
          <path d="m 1575.95,349.037 h 7.91 v -4.275 h -7.91 z" transform="translate(-1579.9053,-349.03741)" id="YB_DEF__path1536" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1538">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1538" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1539">
          <path d="m 1651.05,238.582 h 7.91 v -4.276 h -7.91 z" transform="translate(-1655.004,-238.58161)" id="YB_DEF__path1539" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1541">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1541" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1542">
          <path d="m 1718.24,85.3688 h 7.91 V 81.093 h -7.91 z" transform="translate(-1722.1975,-85.368827)" id="YB_DEF__path1542" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1544">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1544" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1545">
          <path d="m 1583.86,85.3688 h 7.9 V 81.093 h -7.9 z" transform="translate(-1587.8103,-85.368827)" id="YB_DEF__path1545" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1547">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1547" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1549">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1725.3921,-325.52333)" id="YB_DEF__path1549" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1550">
          <path d="m 1648.34,342.791 h 14.63 v -14.788 h -14.63 z" transform="translate(-1661.7178,-335.39701)" id="YB_DEF__path1550" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1552">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1552" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1553">
          <path d="m 1650.07,341.3 h 10.62 v -10.728 h -10.62 z" transform="translate(-1659.4437,-335.93641)" id="YB_DEF__path1553" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1555">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1555" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1557">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1699.0225,-59.497876)" id="YB_DEF__path1557" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1559">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1696.6848,-82.909127)" id="YB_DEF__path1559" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1560">
          <path d="m 1691.93,83.5837 h 19.37 V 63.6969 h -19.37 z" transform="translate(-1701.9819,-83.316977)" id="YB_DEF__path1560" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1562">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1562" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1564">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1724.583,-90.417227)" id="YB_DEF__path1564" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1566">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1728.0828,-91.916927)" id="YB_DEF__path1566" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1568">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1731.5499,-92.752877)" id="YB_DEF__path1568" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1569">
          <path d="m 1723.8,96.3918 h 2.06 v -1.9935 h -2.06 z" transform="translate(-1724.8788,-96.390602)" id="YB_DEF__path1569" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1571">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1571" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1572">
          <path d="m 1710.28,65.424 h 2.05 v -1.9935 h -2.05 z" transform="translate(-1711.3557,-65.422802)" id="YB_DEF__path1572" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1574">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1574" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1576">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1613.1028,-51.092026)" id="YB_DEF__path1576" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1578">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1602.6543,-82.376927)" id="YB_DEF__path1578" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1579">
          <path d="m 1604.62,81.0105 h 20.59 V 60.4433 h -20.59 z" transform="translate(-1604.616,-81.010502)" id="YB_DEF__path1579" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1581">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1581" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1583">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1585.119,-82.669577)" id="YB_DEF__path1583" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1585">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1581.5286,-83.173802)" id="YB_DEF__path1585" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1587">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1578.6493,-83.709827)" id="YB_DEF__path1587" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1588">
          <path d="m 1588.79,95.5206 h 2.13 v -1.9935 h -2.13 z" transform="translate(-1590.922,-94.571702)" id="YB_DEF__path1588" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1590">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1590" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1591">
          <path d="m 1602.86,64.5528 h 2.13 v -1.9934 h -2.13 z" transform="translate(-1604.9937,-63.603977)" id="YB_DEF__path1591" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1593">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1593" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1594">
          <path d="m 1760.62,699.924 h 4.51 v -4.471 h -4.51 z" transform="translate(-1762.8777,-699.92362)" id="YB_DEF__path1594" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1596">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1596" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1597">
          <path d="m 1682.44,699.924 h 4.51 v -4.471 h -4.51 z" transform="translate(-1684.699,-699.92362)" id="YB_DEF__path1597" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1599">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1599" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1601">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1477.5715,-469.47251)" id="YB_DEF__path1601" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1603">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1718.6535,-514.44562)" id="YB_DEF__path1603" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1605">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1600.342,-515.42602)" id="YB_DEF__path1605" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1607">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1718.2069,-514.52881)" id="YB_DEF__path1607" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1609">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1608.1021,-463.07171)" id="YB_DEF__path1609" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1611">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1595.0353,-361.42761)" id="YB_DEF__path1611" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1612">
          <path d="m 1603.27,357.702 h 1 v -11.177 h -1 z" transform="translate(-1603.7695,-357.70181)" id="YB_DEF__path1612" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1614">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1614" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1615">
          <path d="m 1628.22,356.212 h 1 v -11.923 h -1 z" transform="translate(-1628.7247,-356.21151)" id="YB_DEF__path1615" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1617">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1617" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1618">
          <path d="m 1659.42,355.466 h 1 v -12.667 h -1 z" transform="translate(-1659.9186,-355.46641)" id="YB_DEF__path1618" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1620">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1620" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1621">
          <path d="m 1690.61,356.212 h 1 v -11.923 h -1 z" transform="translate(-1691.1126,-356.21151)" id="YB_DEF__path1621" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1623">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1623" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1624">
          <path d="m 1715.57,357.702 h 1 v -11.177 h -1 z" transform="translate(-1716.0676,-357.70181)" id="YB_DEF__path1624" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1626">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1626" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1628">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1647.2272,-504.49181)" id="YB_DEF__path1628" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1630">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1665.2685,-504.49181)" id="YB_DEF__path1630" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1632">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1641.2134,-462.76311)" id="YB_DEF__path1632" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1634">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1671.2823,-462.76311)" id="YB_DEF__path1634" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1636">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1619.7015,-421.73681)" id="YB_DEF__path1636" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1637">
          <path d="m 1619.54,426.958 h 80.89 v -5.953 h -80.89 z" transform="translate(-1619.7015,-421.73681)" id="YB_DEF__path1637" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1639">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1639" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1641">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1627.4316,-644.53742)" id="YB_DEF__path1641" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1643">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1689.1455,-635.20391)" id="YB_DEF__path1643" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1645">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1692.8796,-612.76642)" id="YB_DEF__path1645" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1647">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1626.1606,-636.66292)" id="YB_DEF__path1647" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1649">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1623.3843,-665.82002)" id="YB_DEF__path1649" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1651">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1622.6848,-639.60062)" id="YB_DEF__path1651" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1653">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1653.1945,-639.48851)" id="YB_DEF__path1653" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1655">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1630.2135,-641.93891)" id="YB_DEF__path1655" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1657">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1625.7817,-644.10362)" id="YB_DEF__path1657" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1659">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1626.6874,-643.14842)" id="YB_DEF__path1659" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1661">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1625.8719,-642.55292)" id="YB_DEF__path1661" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1663">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1626.1348,-645.41672)" id="YB_DEF__path1663" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1665">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1623.0144,-659.66561)" id="YB_DEF__path1665" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1667">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1628.5176,-625.60472)" id="YB_DEF__path1667" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1669">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1632.0594,-622.26752)" id="YB_DEF__path1669" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1671">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1622.3025,-620.53382)" id="YB_DEF__path1671" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1673">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1623.2446,-624.02812)" id="YB_DEF__path1673" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1675">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1627.1802,-625.14452)" id="YB_DEF__path1675" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1677">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1625.7195,-634.68851)" id="YB_DEF__path1677" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1679">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1624.9941,-633.68141)" id="YB_DEF__path1679" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1681">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1627.3492,-630.16052)" id="YB_DEF__path1681" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1683">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1624.6455,-624.49222)" id="YB_DEF__path1683" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1685">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1621.2604,-627.64811)" id="YB_DEF__path1685" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1687">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1619.6874,-622.63312)" id="YB_DEF__path1687" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1689">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1675.6527,-625.90001)" id="YB_DEF__path1689" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1691">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1684.947,-630.07552)" id="YB_DEF__path1691" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1693">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1692.9895,-614.72762)" id="YB_DEF__path1693" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1695">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1686.244,-620.39372)" id="YB_DEF__path1695" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1697">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1620.0846,-613.26832)" id="YB_DEF__path1697" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1699">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1620.5667,-613.40122)" id="YB_DEF__path1699" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1701">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1684.0426,-627.08111)" id="YB_DEF__path1701" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1703">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1684.3962,-626.72752)" id="YB_DEF__path1703" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1705">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1619.223,-591.12121)" id="YB_DEF__path1705" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1707">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1619.7052,-591.25421)" id="YB_DEF__path1707" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1709">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1614.2565,-619.28702)" id="YB_DEF__path1709" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1711">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1692.8796,-599.32042)" id="YB_DEF__path1711" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1713">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1693.3797,-599.32042)" id="YB_DEF__path1713" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1715">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1697.8314,-621.16772)" id="YB_DEF__path1715" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1717">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1628.0452,-626.22242)" id="YB_DEF__path1717" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1719">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1628.3988,-626.57591)" id="YB_DEF__path1719" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1721">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1693.1494,-624.19781)" id="YB_DEF__path1721" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1723">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1700.9706,-618.60502)" id="YB_DEF__path1723" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1725">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1708.7917,-618.86762)" id="YB_DEF__path1725" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1726">
          <path d="m 1657.3,625.668 h 35.41 v -72.466 h -35.41 z" transform="translate(-1657.3033,-601.06942)" id="YB_DEF__path1726" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1728">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1728" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1730">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1691.0853,-362.03071)" id="YB_DEF__path1730" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1731">
          <path d="m 1618.16,309.295 h 5.69 v -4.259 h -5.69 z" transform="translate(-1621.0078,-309.29468)" id="YB_DEF__path1731" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1733">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1733" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1734">
          <path d="m 1564.04,199.31 h 5.69 v -4.259 h -5.69 z" transform="translate(-1566.8823,-199.30988)" id="YB_DEF__path1734" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1736">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1736" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1737">
          <path d="m 1612.35,46.6924 h 5.69 v -4.2585 h -5.69 z" transform="translate(-1615.1928,-46.692376)" id="YB_DEF__path1737" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1739">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1739" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1740">
          <path d="m 1515.58,46.7377 h 5.69 v -4.2584 h -5.69 z" transform="translate(-1515.5818,-44.609776)" id="YB_DEF__path1740" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1742">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1742" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1744">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1349.5365,-542.66971)" id="YB_DEF__path1744" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1746">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1341.4561,-369.99811)" id="YB_DEF__path1746" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1748">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1335.0712,-501.36461)" id="YB_DEF__path1748" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1750">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1377.4899,-332.79041)" id="YB_DEF__path1750" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1752">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1391.7544,-83.041427)" id="YB_DEF__path1752" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1754">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1395.6057,-85.629002)" id="YB_DEF__path1754" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1756">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1338.8736,-559.32862)" id="YB_DEF__path1756" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1758">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1365.0583,-553.25422)" id="YB_DEF__path1758" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1760">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1372.5546,-589.82861)" id="YB_DEF__path1760" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1762">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1345.0879,-586.08911)" id="YB_DEF__path1762" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1764">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1351.302,-592.30321)" id="YB_DEF__path1764" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1766">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1337.4711,-590.85292)" id="YB_DEF__path1766" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1768">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1350.7518,-592.70422)" id="YB_DEF__path1768" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1770">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1369.405,-528.62261)" id="YB_DEF__path1770" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1772">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1392.2296,-86.435027)" id="YB_DEF__path1772" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1774">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1392.2296,-86.435027)" id="YB_DEF__path1774" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1775">
          <path d="m 1291.62,318.969 h 5.69 v -4.26 h -5.69 z" transform="translate(-1294.4686,-318.96878)" id="YB_DEF__path1775" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1777">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1777" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1778">
          <path d="m 1297.19,56.2628 h 5.69 v -4.2601 h -5.69 z" transform="translate(-1300.0377,-56.262826)" id="YB_DEF__path1778" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1780">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1780" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1782">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1331.802,-651.77591)" id="YB_DEF__path1782" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1784">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1372.3131,-640.72052)" id="YB_DEF__path1784" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1786">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1373.3092,-588.59431)" id="YB_DEF__path1786" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1788">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1331.9958,-644.33441)" id="YB_DEF__path1788" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1790">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1330.2627,-671.47451)" id="YB_DEF__path1790" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1792">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1329.8263,-647.06882)" id="YB_DEF__path1792" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1794">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1348.3612,-646.91332)" id="YB_DEF__path1794" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1796">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1333.9818,-649.21781)" id="YB_DEF__path1796" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1798">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1331.1954,-651.26042)" id="YB_DEF__path1798" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1800">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1332.1119,-650.26922)" id="YB_DEF__path1800" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1802">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1332.0145,-649.94062)" id="YB_DEF__path1802" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1804">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1332.1608,-652.49182)" id="YB_DEF__path1804" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1806">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1329.844,-665.74592)" id="YB_DEF__path1806" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1808">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1332.7893,-633.97282)" id="YB_DEF__path1808" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1810">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1336.5219,-631.24162)" id="YB_DEF__path1810" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1812">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1328.7433,-629.01392)" id="YB_DEF__path1812" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1814">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1329.4509,-632.61022)" id="YB_DEF__path1814" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1816">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1333.3569,-633.57592)" id="YB_DEF__path1816" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1818">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1331.1888,-642.59432)" id="YB_DEF__path1818" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1820">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1330.417,-641.15111)" id="YB_DEF__path1820" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1822">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1333.4893,-638.28161)" id="YB_DEF__path1822" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1824">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1331.7748,-632.96872)" id="YB_DEF__path1824" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1826">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1328.0865,-635.53522)" id="YB_DEF__path1826" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1828">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1327.1046,-630.86711)" id="YB_DEF__path1828" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1830">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1362.3181,-634.13672)" id="YB_DEF__path1830" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1832">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1368.1194,-638.38181)" id="YB_DEF__path1832" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1834">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1374.0841,-623.91632)" id="YB_DEF__path1834" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1836">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1369.8369,-629.15632)" id="YB_DEF__path1836" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1838">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1328.2032,-622.55801)" id="YB_DEF__path1838" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1840">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1328.7031,-622.55801)" id="YB_DEF__path1840" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1842">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1368.1239,-635.41522)" id="YB_DEF__path1842" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1844">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1368.5557,-635.16281)" id="YB_DEF__path1844" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1846">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1333.1721,-633.66461)" id="YB_DEF__path1846" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1848">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1333.6038,-633.91702)" id="YB_DEF__path1848" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1850">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1324.5654,-628.16042)" id="YB_DEF__path1850" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1852">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1373.6397,-609.57482)" id="YB_DEF__path1852" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1854">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1374.1396,-609.57482)" id="YB_DEF__path1854" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1856">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1376.7306,-629.91092)" id="YB_DEF__path1856" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1858">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1333.1721,-634.61602)" id="YB_DEF__path1858" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1860">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1333.6038,-634.86832)" id="YB_DEF__path1860" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1862">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1374.8082,-632.73142)" id="YB_DEF__path1862" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1864">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1379.6898,-627.52552)" id="YB_DEF__path1864" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1866">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1384.5715,-627.76991)" id="YB_DEF__path1866" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1868">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1369.8891,-532.67542)" id="YB_DEF__path1868" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1870">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1327.6002,-463.64721)" id="YB_DEF__path1870" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1872">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1347.5638,-458.76071)" id="YB_DEF__path1872" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1874">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1338.3744,-490.37511)" id="YB_DEF__path1874" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1876">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1350.3525,-487.44321)" id="YB_DEF__path1876" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1878">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1333.356,-389.61601)" id="YB_DEF__path1878" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1879">
          <path d="m 1330.72,393.683 h 80.89 v -5.953 h -80.89 z" transform="translate(-1330.8843,-388.46191)" id="YB_DEF__path1879" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1881">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1881" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1883">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1384.1979,-429.66291)" id="YB_DEF__path1883" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1885">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1377.9231,-500.37631)" id="YB_DEF__path1885" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1887">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1372.306,-334.32281)" id="YB_DEF__path1887" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1889">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1390.8829,-345.63031)" id="YB_DEF__path1889" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1891">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1378.1206,-327.21563)" id="YB_DEF__path1891" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1893">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1382.2167,-327.75953)" id="YB_DEF__path1893" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1895">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1386.8578,-332.87541)" id="YB_DEF__path1895" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1897">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1390.2094,-337.22561)" id="YB_DEF__path1897" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1899">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1355.6146,-502.24361)" id="YB_DEF__path1899" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1901">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1368.015,-503.89211)" id="YB_DEF__path1901" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1903">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1391.8479,-348.06611)" id="YB_DEF__path1903" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1905">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1388.0137,-59.817301)" id="YB_DEF__path1905" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1907">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1380.1836,-90.957377)" id="YB_DEF__path1907" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1908">
          <path d="m 1380.45,91.0083 h 18.51 V 67.7042 h -18.51 z" transform="translate(-1381.7079,-89.577377)" id="YB_DEF__path1908" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1910">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1910" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1912">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1366.4143,-91.479302)" id="YB_DEF__path1912" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1914">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1363.6002,-92.026427)" id="YB_DEF__path1914" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1916">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1361.3451,-92.595602)" id="YB_DEF__path1916" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1917">
          <path d="m 1369.44,104.152 h 1.68 v -1.976 h -1.68 z" transform="translate(-1371.1155,-103.19708)" id="YB_DEF__path1917" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1919">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1919" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1921">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1371.1155,-103.19708)" id="YB_DEF__path1921" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1922">
          <path d="m 1380.12,73.2778 h 1.68 v -1.9756 h -1.68 z" transform="translate(-1381.795,-72.323327)" id="YB_DEF__path1922" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1924">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1924" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1926">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1381.795,-72.323327)" id="YB_DEF__path1926" />
        </clipPath>
        <mask maskUnits="userSpaceOnUse" x="0" y="0" width="1" height="1" id="YB_DEF__mask1926">
          <image width="1" height="1" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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" transform="matrix(121.33333,0,0,216,1762.6667,542.66667)" id="YB_DEF__image1926" clipPath="url(#YB_DEF__clipPath1927)" />
        </mask>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1927">
          <path d="m 1322,673 h 91 V 511 h -91 z" transform="matrix(0.01098901,0,0,-0.00617284,-14.527473,4.154321)" id="YB_DEF__path1927" />
        </clipPath>
        <mask maskUnits="userSpaceOnUse" x="0" y="0" width="1" height="1" id="YB_DEF__mask1927">
          <image width="1" height="1"  preserveAspectRatio="none" xlinkHref="data:image/png;base64,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" id="YB_DEF__image1927" />
        </mask>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1928">
          <path d="m 1322,673 h 91 V 511 h -91 z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1928" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1929">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1929" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1930">
          <path d="m 1351.96,592.459 h 0.48 v -3.865 h -0.48 z" transform="translate(-1352.4421,-588.59431)" id="YB_DEF__path1930" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1932">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1932" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1933">
          <path d="m 1329.08,578.211 h 3.88 v -3.039 h -3.88 z" transform="translate(-1332.8178,-576.02182)" id="YB_DEF__path1933" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1935">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="YB_DEF__path1935" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1937">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1334.6757,-601.89281)" id="YB_DEF__path1937" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1939">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1333.3254,-602.01992)" id="YB_DEF__path1939" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="YB_DEF__clipPath1941">
          <path d="M 0,1080 H 1920 V 0 H 0 Z" transform="translate(-1329.4269,-568.27561)" id="YB_DEF__path1941" />
        </clipPath>
        <g id="YB_DEF__YUSUF_BACK_RIG_ARTWORK">
          <path id="YB_DEF__YUSUF_BACK_RIG__path836" d="M 0,0 C 0,0 2.313,-4.676 -0.852,-5.425" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,490.59507,654.5588)" clipPath="url(#YB_DEF__clipPath837)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path838" d="M 0,0 C 0,0 10.632,-13.909 -0.948,-22.796" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,488.65867,640.55107)" clipPath="url(#YB_DEF__clipPath839)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path840" d="M 0,0 C 0,0 -2.313,-4.676 0.852,-5.425" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,382.192,652.2444)" clipPath="url(#YB_DEF__clipPath841)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path842" d="M 0,0 C 0,0 -10.632,-13.909 0.948,-22.796" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,384.12827,638.23667)" clipPath="url(#YB_DEF__clipPath843)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path844" d="m 0,0 c 4.981,-81.07 -23.19,-73.786 -42.805,-73.424 -19.615,0.362 -43.065,-1.968 -38.093,74.918 1.274,19.693 21.464,33.75 41.079,33.388 C -20.204,34.519 -1.214,19.76 0,0" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,489.78867,615.9256)" clipPath="url(#YB_DEF__clipPath845)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path846" d="m 0,0 2.731,-12.775 c 0.029,-0.133 0.082,-0.265 0.16,-0.394 1.226,-2.027 11.374,-19.681 -7.366,-19.469 -0.296,0.003 -0.59,-0.001 -0.882,-0.017 -2.766,-0.156 -19.787,-0.33 -7.518,20.254 0.076,0.127 0.128,0.258 0.154,0.39 l 2.371,12.174 c 0.168,0.862 1.388,1.596 3.18,1.897 0.039,0.007 0.078,0.013 0.117,0.02 C -3.854,2.597 -0.329,1.54 0,0" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,443.4132,716.38307)" clipPath="url(#YB_DEF__clipPath847)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path848" d="M 0,0 C 2.076,8.115 16.445,13.118 28.389,13.579 39.326,13.947 50.625,12.412 61.628,11.55 74.469,10.548 83.503,8.646 89.139,0.138 c 2.452,-3.332 2.515,-6.668 2.482,-10.363 0.348,-19.179 1.026,-50.794 3.486,-66.916 0.429,-2.985 1.51,-6.411 2.009,-8.716 0.636,-3.225 0.532,-4.4 1.309,-8.418 1.121,-6.915 2.296,-17.216 -3.692,-23.692 -4.181,-4.496 -11.07,-5.931 -19.226,-7.315 -21.652,-3.582 -51.51,-4.349 -70.805,0.852 -12.333,2.889 -17.06,10.259 -17.735,19.323 -0.619,5.977 0.125,10.525 1.454,15.979 2.078,8.971 6.864,30.367 7.967,43.681 0.581,6.2 -0.085,10.971 0.408,16.921 0.932,8.839 1.834,19.688 3.177,28.411 z" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,375.67707,769.91707)" clipPath="url(#YB_DEF__clipPath849)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path850" d="m 0,0 v 0 c -0.325,4.268 -4.396,7.625 -9.357,7.717 l -91.871,1.696 c -4.834,0.09 -8.815,-3.214 -8.892,-7.379" style={{ fill: "none", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,505.4796,952.90773)" clipPath="url(#YB_DEF__clipPath851)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path852" d="M 0,0 0.465,25.209" style={{ fill: "none", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,431.5064,975.1072)" clipPath="url(#YB_DEF__clipPath853)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path854" d="M 0,0 C 0.924,1.712 20.953,2.784 41.514,2.587 57.599,2.433 74.01,1.503 81.852,-0.504 119.417,-36.737 74.865,-66.005 22.479,-58.841 -2.018,-53.438 -31.745,-23.453 0,0 Z" style={{ fill: "none", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,376.91747,978.04907)" clipPath="url(#YB_DEF__clipPath855)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path856" d="M 0,0 -0.592,-4.563 1.865,-5.09 c 0,0 10.649,-0.663 15.571,-8.956 4.52,-7.615 -19.537,-60.801 -22.849,-69.453 -0.296,-0.773 -0.415,-1.621 -0.344,-2.457 0.523,-6.126 2.418,-32.491 -3.306,-35.786 -6.483,-3.732 -14.887,-2.808 -21.4,2.965 0,0 -0.469,3.345 -0.662,7.933 -0.233,5.552 0.558,11.15 2.306,16.357 1.113,3.314 2.167,8.206 1.452,13.746 -2.292,17.76 -3.075,36.909 1.451,54.307 2.004,7.7 4.1,15.041 5.654,18.703 0,0 0.445,5.867 19.061,3.34" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,400.6124,1023.8603)" clipPath="url(#YB_DEF__clipPath857)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path858" d="m 0,0 0.373,-4.582 -2.182,-0.436 c 0,0 -9.405,-0.269 -14.013,-8.375 C -20.053,-20.836 0.373,-74.23 3.01,-83 c 0.236,-0.783 0.313,-1.635 0.223,-2.467 -0.66,-6.103 -3.188,-32.379 1.749,-35.884 5.591,-3.969 13.028,-3.356 18.954,2.172 0,0 0.523,3.326 0.842,7.904 0.386,5.539 -0.129,11.163 -1.5,16.431 -0.873,3.353 -1.643,8.28 -0.833,13.79 2.598,17.664 2.955,36.128 -0.468,53.681 -1.515,7.769 -3.124,15.182 -4.373,18.899 0,0 -0.202,5.88 -16.688,4.042" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,466.67307,1025.0667)" clipPath="url(#YB_DEF__clipPath859)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path860" d="m 0,0 -2.573,40.606 c -0.026,0.423 -0.08,0.838 -0.162,1.249 -1.28,6.407 -11.839,62.251 8.75,62.369 0.325,10e-4 0.648,0.025 0.97,0.09 3.044,0.613 21.756,1.886 7.581,-64.241 -0.087,-0.409 -0.149,-0.83 -0.182,-1.252 L 11.369,-0.083 C 11.156,-2.836 9.79,-5.229 7.811,-6.264 7.768,-6.286 7.725,-6.309 7.681,-6.33 4.148,-8.116 0.31,-4.896 0,0" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,478.64133,1304.3683)" clipPath="url(#YB_DEF__clipPath861)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path862" d="m 0,0 4.511,40.468 c 0.047,0.42 0.124,0.831 0.234,1.235 1.719,6.315 16.111,61.712 -7.845,62.704 -0.379,0.015 -0.754,0.052 -1.126,0.131 -3.519,0.742 -25.239,2.808 -11.222,-63.872 0.086,-0.412 0.143,-0.838 0.165,-1.261 l 2.057,-39.07 c 0.138,-2.627 1.504,-5.016 3.639,-6.128 0.087,-0.046 0.176,-0.091 0.265,-0.135 C -5.239,-7.944 -0.552,-4.952 0,0" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,380.50627,1308.7969)" clipPath="url(#YB_DEF__clipPath863)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path864" d="m 0,0 c 1.404,5.171 6.699,7.018 11.521,5.491 4.362,-1.345 8.984,-2.939 13.119,-4.876 2.115,-0.985 3.944,-2.045 5.862,-3.037 6.434,-3.121 16.533,-5.436 21.712,-9.751 1.984,-1.633 2.618,-4.069 0.584,-5.326 -2.491,-1.319 -4.832,-0.864 -8.36,-0.844 -5.049,0.161 -10.453,0.547 -15.368,1.334 -6.259,1.079 -12.766,1.791 -19.097,1.71 -1.657,0.006 -3.266,-0.228 -4.869,0.061 -6.251,1.444 -6.738,10.087 -5.116,15.198 z" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,481.31013,1319.346)" clipPath="url(#YB_DEF__clipPath865)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path866" d="m 0,0 c -0.651,5.318 -5.627,7.904 -10.617,7.083 -4.51,-0.707 -9.312,-1.623 -13.681,-2.949 -2.235,-0.673 -4.197,-1.46 -6.237,-2.167 -6.814,-2.169 -17.14,-3.015 -22.882,-6.544 -2.198,-1.333 -3.173,-3.653 -1.34,-5.188 2.277,-1.662 4.659,-1.547 8.154,-2.031 5.02,-0.564 10.423,-0.954 15.4,-0.879 6.349,0.172 12.891,-0.054 19.145,-1.04 1.641,-0.231 3.2,-0.693 4.828,-0.637 6.393,0.536 8.111,9.02 7.237,14.311 z" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,385.32947,1325.9383)" clipPath="url(#YB_DEF__clipPath867)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path868" d="m 0,0 c -2.06,-2.742 -7.578,-8.275 -13.004,-2.747 -5.602,5.708 -10.12,2.91 -10.538,5.994 l 0.705,5.125 c 2.927,2.926 6.89,4.196 11.887,3.808 5.017,-0.238 8.923,-2.44 11.716,-6.61 z" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#111111", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,327.472,999.3132)" clipPath="url(#YB_DEF__clipPath869)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path870" d="m 0,0 c -0.843,-0.591 -1.623,-1.369 -2.342,-2.335 -1.812,-2.368 -2.501,-4.519 -2.067,-6.453 1.215,-1.468 2.634,-1.517 4.257,-0.148 2.28,2.522 2.564,5.578 0.854,9.169 z" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#111111", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,294.6052,988.67213)" clipPath="url(#YB_DEF__clipPath871)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path872" d="M 0,0 C 0.712,-1.839 1.705,-3.993 2.979,-6.463 3.35,-7.695 3.94,-8.259 4.746,-8.158 5.737,-7.986 6.192,-7.387 6.112,-6.36 6.037,-4.803 5.417,-2.928 4.25,-0.735 3.354,1.034 2.308,1.687 1.112,1.224 0.306,1.123 -0.066,0.715 0,0" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#111111", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,322.42333,1006.1347)" clipPath="url(#YB_DEF__clipPath873)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path874" d="m 0,0 c -0.528,-3.113 -0.901,-6.547 -1.118,-10.3 -0.313,-1.55 -0.043,-2.483 0.809,-2.799 1.048,-0.344 1.806,0.098 2.274,1.329 0.727,2.389 1.247,5.453 1.563,9.193 C 3.725,-0.414 3.19,0.755 1.92,0.93 0.969,1.26 0.329,0.951 0,0" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#111111", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,315.138,1007.5247)" clipPath="url(#YB_DEF__clipPath875)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path876" d="m 0,0 c -0.528,-3.113 -1.028,-7.475 -1.501,-13.084 -0.327,-1.647 -0.063,-2.63 0.789,-2.947 1.146,-0.356 1.959,0.129 2.44,1.456 0.889,3.562 1.537,7.554 1.946,11.977 C 3.872,-0.434 3.337,0.734 2.066,0.91 1.019,1.253 0.329,0.951 0,0" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#111111", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,305.49413,1003.7568)" clipPath="url(#YB_DEF__clipPath877)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path878" d="m 0,0 c -0.528,-3.113 -0.982,-6.783 -1.366,-11.012 -0.313,-1.551 -0.043,-2.484 0.81,-2.8 1.047,-0.343 1.805,0.099 2.273,1.329 0.795,2.877 1.398,6.18 1.811,9.906 C 3.824,-0.427 3.337,0.734 2.066,0.91 1.019,1.253 0.329,0.951 0,0" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#111111", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,298.3192,1000.2159)" clipPath="url(#YB_DEF__clipPath879)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path880" d="m 0,0 -13.128,-0.576 c -1.64,-0.072 -3.041,-3.115 -3.725,-8.093 v 0 c -0.586,-4.263 -0.583,-9.493 0.008,-14.345 l 7.033,-57.793 c 0.697,-5.721 2.323,-9.627 3.979,-9.554 l 7.201,0.316 c 1.466,0.064 2.622,3.487 2.873,8.506 l 2.67,53.34 c 0.355,7.096 -0.383,14.876 -1.952,20.57 v 0 C 3.605,-2.719 1.787,0.078 0,0" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,529.88053,872.53347)" clipPath="url(#YB_DEF__clipPath881)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path882" d="m 0,0 -17.749,-0.779 c -2.218,-0.097 -4.164,-2.998 -5.176,-7.716 v 0 c -0.867,-4.04 -0.956,-8.983 -0.244,-13.559 l 8.481,-54.501 c 0.84,-5.396 2.969,-9.059 5.208,-8.96 l 9.735,0.427 c 1.982,0.087 9.469,6.776 9.898,11.525 L 8.84,-26.531 c 0.605,6.713 -0.255,14.054 -2.275,19.408 v 0 C 4.823,-2.506 2.416,0.106 0,0" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,526.05747,774.26027)" clipPath="url(#YB_DEF__clipPath883)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path884" d="M 0,0 C 3.391,3.701 7.583,5.289 12.579,4.767 17.578,4.396 21.303,2.543 23.756,-0.792 L 23.679,-5.964 C 22.801,-8.949 18.756,-5.502 12.357,-10.299 6.159,-14.945 1.54,-8.643 -0.083,-5.622 Z" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#111111", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,511.18853,995.30933)" clipPath="url(#YB_DEF__clipPath885)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path886" d="m 0,0 c -2.232,-3.291 -2.412,-6.355 -0.539,-9.193 1.398,-1.598 2.808,-1.764 4.23,-0.496 0.721,1.846 0.365,4.077 -1.069,6.691 -0.565,1.064 -1.219,1.95 -1.963,2.662 z" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#111111", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,544.2952,996.79667)" clipPath="url(#YB_DEF__clipPath887)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path888" d="m 0,0 c -1.112,0.638 -2.245,0.15 -3.397,-1.463 -1.485,-1.992 -2.38,-3.752 -2.69,-5.28 -0.234,-1.003 0.125,-1.663 1.079,-1.984 0.782,-0.221 1.45,0.248 2.003,1.41 1.631,2.249 2.938,4.229 3.92,5.939 C 1.088,-0.681 0.782,-0.222 0,0" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#111111", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,513.82,1008.4735)" clipPath="url(#YB_DEF__clipPath889)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path890" d="m 0,0 c -1.282,0.018 -1.988,-1.056 -2.119,-3.225 -0.252,-3.744 -0.2,-6.852 0.159,-9.323 0.276,-1.287 0.959,-1.838 2.046,-1.657 0.891,0.184 1.299,1.066 1.223,2.645 C 1.66,-7.817 1.81,-4.366 1.758,-1.209 1.575,-0.219 0.99,0.183 0,0" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#111111", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,519.68853,1011.1717)" clipPath="url(#YB_DEF__clipPath891)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path892" d="m 0,0 c -1.282,0.018 -1.988,-1.056 -2.119,-3.225 -0.262,-4.435 -0.224,-8.479 0.117,-12.134 0.276,-1.384 1.006,-1.987 2.193,-1.807 0.89,0.184 1.299,1.116 1.224,2.794 0.379,5.617 0.543,10.004 0.49,13.161 C 1.723,-0.222 1.087,0.181 0,0" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#111111", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,529.59307,1008.8992)" clipPath="url(#YB_DEF__clipPath893)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path894" d="m 0,0 c -1.282,0.018 -1.939,-1.057 -1.971,-3.227 -0.154,-3.745 -0.056,-7.101 0.295,-10.065 0.277,-1.287 0.96,-1.838 2.047,-1.657 0.891,0.184 1.299,1.066 1.223,2.646 0.259,4.238 0.364,7.935 0.311,11.092 C 1.723,-0.222 1.087,0.181 0,0" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#111111", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,537.21987,1006.4812)" clipPath="url(#YB_DEF__clipPath895)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path896" d="m 0,0 12.891,-2.55 c 1.611,-0.319 2.536,-3.538 2.461,-8.562 -0.064,-4.303 -0.856,-9.473 -2.171,-14.18 L -2.492,-81.361 c -1.551,-5.551 -3.748,-9.166 -5.375,-8.845 l -7.071,1.399 c -1.439,0.285 -2.065,3.843 -1.556,8.842 l 5.407,53.132 c 0.72,7.068 2.624,14.647 5.034,20.039 v 0 C -3.974,-2.144 -1.755,0.347 0,0" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,331.4644,864.06533)" clipPath="url(#YB_DEF__clipPath897)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path898" d="m 0,0 15.778,-3.448 c 1.971,-0.431 3.317,-3.592 3.579,-8.408 v -10e-4 c 0.224,-4.124 -0.372,-9.024 -1.634,-13.44 L 2.689,-77.894 c -1.489,-5.207 -3.894,-8.507 -5.885,-8.072 l -8.654,1.891 c -1.762,0.385 -2.769,3.849 -2.504,8.608 l 2.819,50.574 c 0.375,6.728 2.148,13.854 4.687,18.842 v 0 C -4.659,-1.75 -2.147,0.469 0,0" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,349.57027,767.74613)" clipPath="url(#YB_DEF__clipPath899)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path900" d="m 0,0 -10.959,3.81 c -1.29,3.357 -1.502,7.066 -0.636,11.127 l 2.421,10.5 c 0.568,2.42 1.763,3.895 3.585,4.425 l 12.575,2.607 5.15,-1.753 z" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,369.92453,807.73147)" clipPath="url(#YB_DEF__clipPath901)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path902" d="m 0,0 c -1.251,-2.764 -2.915,-3.785 -4.989,-3.064 l -4.28,1.488 c -2.334,0.812 -2.921,2.47 -1.759,4.974 l 7.694,15.865 C -0.25,22.698 3.101,23.35 6.721,21.219 8.227,20.114 8.455,19.308 7.407,18.8 Z" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,362.01027,792.0928)" clipPath="url(#YB_DEF__clipPath903)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path904" d="m 0,0 4.147,-1.226 9.389,-9.648 c 1.269,-1.521 1.421,-3.428 0.457,-5.721 l -4.221,-9.923 c -1.695,-3.796 -4.117,-6.661 -7.265,-8.594 l -11.85,3.501 z" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,496.9052,766.7044)" clipPath="url(#YB_DEF__clipPath905)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path906" d="M 0,0 C -0.504,1.051 0.177,1.539 2.043,1.465 6.202,0.876 8.418,-1.722 8.689,-6.331 L 4.822,-23.534 C 4.17,-26.216 2.678,-27.147 0.346,-26.328 l -4.274,1.503 c -2.072,0.729 -2.737,2.564 -1.993,5.506 z" style={{ fill: "#d48455", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,507.3312,775.5364)" clipPath="url(#YB_DEF__clipPath907)" />
          <g opacity="0.300003" id="YB_DEF__YUSUF_BACK_RIG__g909" clipPath="url(#YB_DEF__clipPath910)">
            <path d="m 0,0 c 0.493,0.536 0.986,1.073 1.48,1.609 0.177,0.193 0.204,0.519 0,0.707 -0.193,0.177 -0.519,0.206 -0.708,0 C 0.279,1.78 -0.214,1.243 -0.707,0.707 -0.884,0.515 -0.912,0.188 -0.707,0 -0.514,-0.177 -0.189,-0.206 0,0" style={{ fill: "#180000", fillOpacity: "1", fillRule: "nonzero", stroke: "none" }} transform="matrix(1.3333333,0,0,-1.3333333,394.67907,588.50827)" clipPath="url(#YB_DEF__clipPath908)" id="YB_DEF__path909" />
          </g>
          <path id="YB_DEF__YUSUF_BACK_RIG__path911" d="m 0,0 51.001,-2.491 c 0.872,-1.428 0.948,-3.091 0.227,-4.99 -0.679,-1.316 -2.377,-1.877 -5.093,-1.682 L 2.492,-6.03 C -0.39,-5.433 -1.22,-3.423 0,0" style={{ fill: "#d8d8d8", fillOpacity: "1", fillRule: "nonzero", stroke: "#2a2a2a", strokeWidth: "2", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,481.2864,1339.2023)" clipPath="url(#YB_DEF__clipPath912)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path913" d="m 0,0 c -4.234,0.537 -4.366,-1.635 -5.914,-5.361 -1.547,-3.726 -3.889,-12.073 0.1,-14.54 l 59.502,-2.13 c 4.282,-0.151 6.139,1.771 5.57,5.765 -0.741,2.643 -3.191,4.523 -7.351,5.639 l -16.653,7.656 c -1.75,3.163 -7.82,2.899 -10.75,5.232 l -5.8,5.147 C 16.709,8.642 15.06,8.361 13.757,6.565 12.406,4.383 11.888,1.997 12.205,-0.592 Z" style={{ fill: "#f5f5f5", fillOpacity: "1", fillRule: "nonzero", stroke: "#2a2a2a", strokeWidth: "2.5", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,482.57,1310.8171)" clipPath="url(#YB_DEF__clipPath914)" />
          <g opacity="0.600006" id="YB_DEF__YUSUF_BACK_RIG__g916" clipPath="url(#YB_DEF__clipPath917)">
            <path d="m 0,0 c -3.858,0.489 -6.548,-1.4 -8.069,-5.669 -1.521,-4.269 -2.601,-8.377 0.98,-11.062 L 6.595,-17.568 8.347,0.181 Z" style={{ fill: "#e0e0e0", fillOpacity: "1", fillRule: "nonzero", stroke: "none" }} transform="matrix(1.3333333,0,0,-1.3333333,485.45293,1313.2764)" clipPath="url(#YB_DEF__clipPath915)" id="YB_DEF__path916" />
          </g>
          <path id="YB_DEF__YUSUF_BACK_RIG__path918" d="M 0,0 3.607,-6.34" style={{ fill: "none", stroke: "#2a2a2a", strokeWidth: "2", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,513.15787,1304.3049)" clipPath="url(#YB_DEF__clipPath919)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path920" d="M 0,0 3.497,-7.209" style={{ fill: "none", stroke: "#2a2a2a", strokeWidth: "2", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,517.26093,1302.8643)" clipPath="url(#YB_DEF__clipPath921)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path922" d="M 0,0 2.882,-7.425" style={{ fill: "none", stroke: "#2a2a2a", strokeWidth: "2", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,521.26613,1302.1956)" clipPath="url(#YB_DEF__clipPath923)" />
          <g opacity="0" id="YB_DEF__YUSUF_BACK_RIG__g925" clipPath="url(#YB_DEF__clipPath926)">
            <path d="M 0,0 C 0.479,-0.061 0.819,-0.499 0.758,-0.979 0.697,-1.458 0.259,-1.798 -0.22,-1.737 -0.7,-1.676 -1.039,-1.238 -0.978,-0.758 -0.917,-0.279 -0.479,0.061 0,0" style={{ fill: "#e0002a", fillOpacity: "1", fillRule: "nonzero", stroke: "none" }} transform="matrix(1.3333333,0,0,-1.3333333,514.03827,1297.3569)" clipPath="url(#YB_DEF__clipPath924)" id="YB_DEF__path925" />
          </g>
          <g opacity="0" id="YB_DEF__YUSUF_BACK_RIG__g928" clipPath="url(#YB_DEF__clipPath929)">
            <path d="M 0,0 C 0.479,-0.061 0.819,-0.499 0.758,-0.979 0.697,-1.458 0.259,-1.798 -0.22,-1.737 -0.7,-1.676 -1.039,-1.238 -0.978,-0.758 -0.917,-0.279 -0.479,0.061 0,0" style={{ fill: "#c98a2e", fillOpacity: "1", fillRule: "nonzero", stroke: "none" }} transform="matrix(1.3333333,0,0,-1.3333333,495.8868,1332.314)" clipPath="url(#YB_DEF__clipPath927)" id="YB_DEF__path928" />
          </g>
          <path id="YB_DEF__YUSUF_BACK_RIG__path930" d="m 0,0 -43.746,0.907 c -2.722,0.056 -4.361,0.771 -4.916,2.145 -0.543,1.957 -0.314,3.606 0.686,4.947 L 3.037,5.775 C 3.937,2.253 2.924,0.329 0,0" style={{ fill: "#d8d8d8", fillOpacity: "1", fillRule: "nonzero", stroke: "#2a2a2a", strokeWidth: "2", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,373.9708,1350.9845)" clipPath="url(#YB_DEF__clipPath931)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path932" d="m 0,0 c 0.554,2.549 0.259,4.972 -0.886,7.27 -1.132,1.908 -2.748,2.34 -4.847,1.296 l -6.25,-4.591 C -15.116,1.923 -17.7,-0.598 -19.734,-3.586 L -40.457,-6.33 c -4.246,-0.727 -6.859,-2.373 -7.84,-4.936 -0.935,-3.925 0.737,-6.01 5.015,-6.255 l 59.444,-3.367 c 4.2,2.088 2.638,10.615 1.44,14.468 -1.197,3.853 -1.129,6.028 -5.394,5.884 z" style={{ fill: "#f5f5f5", fillOpacity: "1", fillRule: "nonzero", stroke: "#2a2a2a", strokeWidth: "2.5", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,363.0816,1314.1872)" clipPath="url(#YB_DEF__clipPath933)" />
          <g opacity="0.600006" id="YB_DEF__YUSUF_BACK_RIG__g935" clipPath="url(#YB_DEF__clipPath936)">
            <path d="m 0,0 0.109,-17.835 13.703,-0.429 c 3.813,2.343 3.117,6.533 1.995,10.924 -1.121,4.391 -3.625,6.521 -7.512,6.389 z" style={{ fill: "#e0e0e0", fillOpacity: "1", fillRule: "nonzero", stroke: "none" }} transform="matrix(1.3333333,0,0,-1.3333333,365.20147,1315.8179)" clipPath="url(#YB_DEF__clipPath934)" id="YB_DEF__path935" />
          </g>
          <path id="YB_DEF__YUSUF_BACK_RIG__path937" d="M 0,0 4.176,5.981" style={{ fill: "none", stroke: "#2a2a2a", strokeWidth: "2", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,343.93333,1313.5705)" clipPath="url(#YB_DEF__clipPath938)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path939" d="M 0,0 4.147,6.856" style={{ fill: "none", stroke: "#2a2a2a", strokeWidth: "2", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,340.01987,1312.9241)" clipPath="url(#YB_DEF__clipPath940)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path941" d="M 0,0 3.554,7.128" style={{ fill: "none", stroke: "#2a2a2a", strokeWidth: "2", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,336.88387,1312.2513)" clipPath="url(#YB_DEF__clipPath942)" />
          <g opacity="0" id="YB_DEF__YUSUF_BACK_RIG__g944" clipPath="url(#YB_DEF__clipPath945)">
            <path d="m 0,0 c 0.016,-0.483 -0.362,-0.888 -0.845,-0.904 -0.483,-0.017 -0.888,0.362 -0.904,0.845 -0.017,0.483 0.362,0.888 0.845,0.904 C -0.421,0.862 -0.016,0.483 0,0" style={{ fill: "#e0002a", fillOpacity: "1", fillRule: "nonzero", stroke: "none" }} transform="matrix(1.3333333,0,0,-1.3333333,350.4708,1299.724)" clipPath="url(#YB_DEF__clipPath943)" id="YB_DEF__path944" />
          </g>
          <g opacity="0" id="YB_DEF__YUSUF_BACK_RIG__g947" clipPath="url(#YB_DEF__clipPath948)">
            <path d="m 0,0 c 0.016,-0.483 -0.362,-0.888 -0.845,-0.904 -0.483,-0.017 -0.888,0.362 -0.904,0.845 -0.017,0.483 0.362,0.888 0.845,0.904 C -0.421,0.862 -0.016,0.483 0,0" style={{ fill: "#c98a2e", fillOpacity: "1", fillRule: "nonzero", stroke: "none" }} transform="matrix(1.3333333,0,0,-1.3333333,365.32267,1336.2065)" clipPath="url(#YB_DEF__clipPath946)" id="YB_DEF__path947" />
          </g>
          <g opacity="0.300003" id="YB_DEF__YUSUF_BACK_RIG__g948" clipPath="url(#YB_DEF__clipPath949)" />
          <g opacity="0.100006" id="YB_DEF__YUSUF_BACK_RIG__g951" clipPath="url(#YB_DEF__clipPath952)">
            <path d="m 0,0 c 0,0 3.283,-1.664 3.697,0.756 0.415,2.42 5.505,11.749 5.505,11.749 L 7.62,1.574 c 0,0 1.835,-4.317 3.327,0.382 1.492,4.699 1.461,11.18 1.461,11.18 l 1.912,0.975 c 0,0 3.727,-10.52 5.092,-8.722 1.366,1.798 -0.711,8.079 -1.895,9.653 -1.184,1.573 0.936,3.622 0.936,3.622 l 0.766,5.57 -5.33,5.128 -8.54,-14.306 c 0,0 -2.317,1.711 -3.074,1.242 C 1.517,15.829 -0.318,0.852 -0.318,0.852" style={{ fill: "#412104", fillOpacity: "1", fillRule: "nonzero", stroke: "none" }} transform="matrix(1.3333333,0,0,-1.3333333,302.8684,1024.1983)" clipPath="url(#YB_DEF__clipPath950)" id="YB_DEF__path951" />
          </g>
          <g opacity="0.100006" id="YB_DEF__YUSUF_BACK_RIG__g954" clipPath="url(#YB_DEF__clipPath955)">
            <path d="m 0,0 8.736,-14.476 c 0,0 0.037,-14.006 -0.094,-16.319 -0.132,-2.313 -3.286,1.326 -3.286,1.326 L 4.811,-14.41 1.78,-16.043 C 2.159,-20.817 0.016,-30.02 0.016,-30.02 c -5.097,4.092 -0.087,14.206 -0.087,14.206 l -2.927,1.034 -4.447,-7.689 c 0,0 -2.162,-1.437 -3.211,0.629 -1.049,2.066 5.815,9.568 5.815,9.568 -5.573,9.671 4.299,12.734 4.299,12.734" style={{ fill: "#412104", fillOpacity: "1", fillRule: "nonzero", stroke: "none" }} transform="matrix(1.3333333,0,0,-1.3333333,519.78267,990.086)" clipPath="url(#YB_DEF__clipPath953)" id="YB_DEF__path954" />
          </g>
          <g opacity="0.100006" id="YB_DEF__YUSUF_BACK_RIG__g959" clipPath="url(#YB_DEF__clipPath960)">
            <path d="m 0,0 c -0.072,0.251 -0.502,0.231 -0.532,-0.026 -0.75,-6.499 -0.781,-24.667 -2.118,-20.742 l 10.281,-1.605 c 0.109,0.012 0.731,0.089 0.76,0.178 0.236,0.726 -2.126,6.414 -4.495,8.785 -0.026,0.026 -0.045,0.057 -0.055,0.089 z" style={{ fill: "#412104", fillOpacity: "1", fillRule: "nonzero", stroke: "none" }} transform="matrix(1.3333333,0,0,-1.3333333,442.8232,717.09307)" clipPath="url(#YB_DEF__clipPath958)" id="YB_DEF__path959" />
          </g>
          <path id="YB_DEF__YUSUF_BACK_RIG__path967" d="m 0,0 c -31.634,-3.853 -51.792,-3.266 -63.088,-2.111 -6.705,0.686 -12.71,-4.443 -13.345,-11.51 -1.443,-16.059 -0.037,-27.758 1.627,-35.253 1.315,-5.922 6.428,-10.024 12.198,-9.845 12.881,0.399 36.55,1.046 50.037,0.885 5.994,-0.071 11.147,4.452 12.141,10.68 1.441,9.025 2.52,24.254 0.602,48.224" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,486.54533,609.9352)" clipPath="url(#YB_DEF__clipPath968)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path969" d="m 0,0 -2.317,1.783 c 0,0 8.452,31.768 41.295,30.147 0,0 30.349,-0.552 39.616,-31.752 C 78.594,0.178 5.881,-1.605 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,384.72613,611.83693)" clipPath="url(#YB_DEF__clipPath970)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path971" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,426.31027,573.684)" clipPath="url(#YB_DEF__clipPath972)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path973" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,439.8548,574.3972)" clipPath="url(#YB_DEF__clipPath974)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path975" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,415.3796,577.9628)" clipPath="url(#YB_DEF__clipPath976)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path977" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,421.32013,577.48733)" clipPath="url(#YB_DEF__clipPath978)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path979" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,493.79533,634.30067)" clipPath="url(#YB_DEF__clipPath980)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path981" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,385.91413,632.57733)" clipPath="url(#YB_DEF__clipPath982)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path983" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,394.12547,616.00347)" clipPath="url(#YB_DEF__clipPath984)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path985" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,492.6072,620.9888)" clipPath="url(#YB_DEF__clipPath986)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path987" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,491.63587,607.28067)" clipPath="url(#YB_DEF__clipPath988)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path989" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,487.8548,596.5044)" clipPath="url(#YB_DEF__clipPath990)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path991" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,481.20133,589.84853)" clipPath="url(#YB_DEF__clipPath992)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path993" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,475.9736,585.33187)" clipPath="url(#YB_DEF__clipPath994)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path995" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,445.79533,573.20853)" clipPath="url(#YB_DEF__clipPath996)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path997" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,452.4488,572.25773)" clipPath="url(#YB_DEF__clipPath998)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path999" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,459.8152,575.58573)" clipPath="url(#YB_DEF__clipPath1000)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1001" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,470.74587,583.9056)" clipPath="url(#YB_DEF__clipPath1002)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1003" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,465.51813,582.2416)" clipPath="url(#YB_DEF__clipPath1004)" />
          <g opacity="0.300003" id="YB_DEF__YUSUF_BACK_RIG__g1006" clipPath="url(#YB_DEF__clipPath1007)">
            <path d="M 0,0 C 0,0 17.39,-7.596 15.495,-26.03" style={{ fill: "#f2f2f2", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,464.80533,582.1228)" clipPath="url(#YB_DEF__clipPath1005)" id="YB_DEF__path1006" />
          </g>
          <g opacity="0.300003" id="YB_DEF__YUSUF_BACK_RIG__g1009" clipPath="url(#YB_DEF__clipPath1010)">
            <path d="M 0,0 C 0,0 6.8,-2.97 6.059,-10.178" style={{ fill: "#f2f2f2", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,474.83573,615.40253)" clipPath="url(#YB_DEF__clipPath1008)" id="YB_DEF__path1009" />
          </g>
          <g opacity="0.300003" id="YB_DEF__YUSUF_BACK_RIG__g1012" clipPath="url(#YB_DEF__clipPath1013)">
            <path d="M 0,0 C 0,0 3.22,-1.314 2.869,-4.503" style={{ fill: "#f2f2f2", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,483.75573,622.4728)" clipPath="url(#YB_DEF__clipPath1011)" id="YB_DEF__path1012" />
          </g>
          <g opacity="0.300003" id="YB_DEF__YUSUF_BACK_RIG__g1015" clipPath="url(#YB_DEF__clipPath1016)">
            <path d="M 0,0 C 0,0 3.22,-1.314 2.869,-4.503" style={{ fill: "#f2f2f2", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,484.11267,618.93307)" clipPath="url(#YB_DEF__clipPath1014)" id="YB_DEF__path1015" />
          </g>
          <g opacity="0.300003" id="YB_DEF__YUSUF_BACK_RIG__g1018" clipPath="url(#YB_DEF__clipPath1019)">
            <path d="M 0,0 C 0,0 3.22,-1.314 2.869,-4.503" style={{ fill: "#f2f2f2", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,480.96413,617.3284)" clipPath="url(#YB_DEF__clipPath1017)" id="YB_DEF__path1018" />
          </g>
          <path id="YB_DEF__YUSUF_BACK_RIG__path1020" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,387.10227,618.09667)" clipPath="url(#YB_DEF__clipPath1021)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1022" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,401.24093,682.61587)" clipPath="url(#YB_DEF__clipPath1023)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1024" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,407.538,683.56667)" clipPath="url(#YB_DEF__clipPath1025)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1026" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,413.59733,684.04213)" clipPath="url(#YB_DEF__clipPath1027)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1028" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,427.3796,681.1896)" clipPath="url(#YB_DEF__clipPath1029)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1030" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,421.32013,684.5176)" clipPath="url(#YB_DEF__clipPath1031)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1032" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,432.6072,683.6856)" clipPath="url(#YB_DEF__clipPath1033)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1034" d="m 0,0 c 0,-1.904 -1.197,-3.447 -2.673,-3.447 -1.477,0 -2.674,1.543 -2.674,3.447 0,1.904 1.197,3.447 2.674,3.447 C -1.197,3.447 0,1.904 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,407.18147,679.08973)" clipPath="url(#YB_DEF__clipPath1035)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1036" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,439.736,684.75533)" clipPath="url(#YB_DEF__clipPath1037)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1038" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,447.5776,684.5176)" clipPath="url(#YB_DEF__clipPath1039)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1040" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,454.34987,682.9724)" clipPath="url(#YB_DEF__clipPath1041)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1042" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,461.47853,683.6856)" clipPath="url(#YB_DEF__clipPath1043)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1044" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,468.4884,680.71413)" clipPath="url(#YB_DEF__clipPath1045)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1046" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,480.132,682.49693)" clipPath="url(#YB_DEF__clipPath1047)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1048" d="m 0,0 c 0,-1.904 -1.197,-3.447 -2.673,-3.447 -1.477,0 -2.674,1.543 -2.674,3.447 0,1.904 1.197,3.447 2.674,3.447 C -1.197,3.447 0,1.904 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,445.67653,681.2292)" clipPath="url(#YB_DEF__clipPath1049)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1050" d="m 0,0 c 0,-3.003 -0.718,-5.438 -1.604,-5.438 -0.886,0 -1.604,2.435 -1.604,5.438 0,3.003 0.718,5.438 1.604,5.438 C -0.718,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,491.3004,648.97947)" clipPath="url(#YB_DEF__clipPath1051)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1052" d="m 0,0 c 0,-3.003 -0.898,-5.438 -2.005,-5.438 -1.107,0 -2.005,2.435 -2.005,5.438 0,3.003 0.898,5.438 2.005,5.438 C -0.898,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,490.94387,662.5292)" clipPath="url(#YB_DEF__clipPath1053)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1054" d="m 0,0 c 0,-2.031 -1.197,-3.677 -2.673,-3.677 -1.477,0 -2.674,1.646 -2.674,3.677 0,2.031 1.197,3.677 2.674,3.677 C -1.197,3.677 0,2.031 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,489.16173,674.2068)" clipPath="url(#YB_DEF__clipPath1055)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1056" d="m 0,0 c 0,-3.003 -0.898,-5.438 -2.005,-5.438 -1.107,0 -2.005,2.435 -2.005,5.438 0,3.003 0.898,5.438 2.005,5.438 C -0.898,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,386.50507,645.39427)" clipPath="url(#YB_DEF__clipPath1057)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1058" d="m 0,0 c 0,-2.031 -0.698,-3.677 -1.558,-3.677 -0.861,0 -1.558,1.646 -1.558,3.677 0,2.031 0.697,3.677 1.558,3.677 C -0.698,3.677 0,2.031 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,388.40613,677.3964)" clipPath="url(#YB_DEF__clipPath1059)" />
          <g opacity="0.100006" id="YB_DEF__YUSUF_BACK_RIG__g1061" clipPath="url(#YB_DEF__clipPath1062)">
            <path d="m 0,0 c 0,0 1.858,-13.637 0.232,-15.742 -1.625,-2.104 -4.552,2.638 -4.552,2.638 L -2.8,0.449 Z" style={{ fill: "#412104", fillOpacity: "1", fillRule: "nonzero", stroke: "none" }} transform="matrix(1.3333333,0,0,-1.3333333,388.14667,625.45653)" clipPath="url(#YB_DEF__clipPath1060)" id="YB_DEF__path1061" />
          </g>
          <path id="YB_DEF__YUSUF_BACK_RIG__path1063" d="m 0,0 c 0.252,-2.015 -0.236,-3.735 -1.09,-3.842 -0.854,-0.107 -1.751,1.44 -2.002,3.455 -0.252,2.015 0.236,3.736 1.09,3.842 C -1.148,3.562 -0.252,2.015 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,385.956,655.37773)" clipPath="url(#YB_DEF__clipPath1064)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1065" d="m 0,0 c 0,-2.031 -0.698,-3.677 -1.558,-3.677 -0.861,0 -1.558,1.646 -1.558,3.677 0,2.031 0.697,3.677 1.558,3.677 C -0.698,3.677 0,2.031 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,386.32853,663.71773)" clipPath="url(#YB_DEF__clipPath1066)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1067" d="m 0,0 c 0,-2.031 -0.698,-3.677 -1.558,-3.677 -0.861,0 -1.558,1.646 -1.558,3.677 0,2.031 0.697,3.677 1.558,3.677 C -0.698,3.677 0,2.031 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,387.04133,670.968)" clipPath="url(#YB_DEF__clipPath1068)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1069" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,387.5776,605.06213)" clipPath="url(#YB_DEF__clipPath1070)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1071" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,392.0924,596.26667)" clipPath="url(#YB_DEF__clipPath1072)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1073" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,397.55773,587.47133)" clipPath="url(#YB_DEF__clipPath1074)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1075" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,403.736,586.28267)" clipPath="url(#YB_DEF__clipPath1076)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1077" d="m 0,0 c 0,-1.904 -1.197,-3.447 -2.673,-3.447 -1.477,0 -2.674,1.543 -2.674,3.447 0,1.904 1.197,3.447 2.674,3.447 C -1.197,3.447 0,1.904 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,432.2508,570.15787)" clipPath="url(#YB_DEF__clipPath1078)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1079" d="m 0,0 c 0,-3.003 -1.197,-5.438 -2.673,-5.438 -1.477,0 -2.674,2.435 -2.674,5.438 0,3.003 1.197,5.438 2.674,5.438 C -1.197,5.438 0,3.003 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,408.4884,582.2416)" clipPath="url(#YB_DEF__clipPath1080)" />
          <g opacity="0.100006" id="YB_DEF__YUSUF_BACK_RIG__g1082" clipPath="url(#YB_DEF__clipPath1083)">
            <path d="m 0,0 c -9.017,-0.181 -18.032,-0.304 -22.055,-2.153 -0.977,-0.396 -1.632,-0.901 -2.022,-1.464 0.291,-0.102 0.561,-0.248 0.716,-0.433 0.117,-0.14 0.223,-0.279 0.321,-0.419 0.005,0.004 0.01,0.008 0.015,0.011 0.017,-0.035 0.032,-0.071 0.048,-0.107 0.204,-0.302 0.369,-0.616 0.505,-0.958 0.427,-0.175 0.811,-0.463 1.081,-0.824 0.447,-0.597 0.944,-1.166 1.334,-1.798 0.135,-0.219 0.273,-0.561 0.468,-0.769 0.012,-0.01 0.025,-0.019 0.037,-0.029 -0.12,0.144 -0.124,0.151 0.005,0.003 0.007,-0.008 0.015,-0.016 0.022,-0.024 0.456,-0.386 0.879,-0.809 1.348,-1.211 0.091,-0.078 0.189,-0.15 0.279,-0.228 0.24,-0.153 0.479,-0.308 0.718,-0.461 0.579,-0.369 1.14,-0.755 1.69,-1.161 0.015,-0.01 0.021,-0.028 0.035,-0.04 3.229,-1.18 6.771,-1.991 10.374,-2.599 12.684,-1.883 29.115,-1.355 40.994,2.911 0.163,0.054 0.326,0.116 0.488,0.174 0.545,0.94 1.321,1.714 2.218,2.409 0.431,0.334 0.87,0.66 1.283,1.014 0.209,0.179 0.414,0.364 0.605,0.561 0.013,0.014 0.119,0.147 0.195,0.229 0.015,0.022 0.031,0.045 0.046,0.067 0.023,0.036 0.084,0.168 0.134,0.252 0.004,0.013 0.009,0.025 0.013,0.039 0.12,0.321 0.249,0.648 0.447,0.935 0.388,0.563 0.938,0.934 1.543,1.272 0.063,0.096 0.134,0.187 0.215,0.271 0.085,0.466 0.313,0.903 0.706,1.205 0.006,0.008 0.008,0.017 0.014,0.024 C 39.305,3.331 8.856,-0.361 0,0" style={{ fill: "#412104", fillOpacity: "1", fillRule: "nonzero", stroke: "none" }} transform="matrix(1.3333333,0,0,-1.3333333,422.8144,693.24053)" clipPath="url(#YB_DEF__clipPath1081)" id="YB_DEF__path1082" />
          </g>
          <g opacity="0.100006" id="YB_DEF__YUSUF_BACK_RIG__g1085" clipPath="url(#YB_DEF__clipPath1086)">
            <path d="m 0,0 c 0,0 1.858,-9.983 0.232,-11.524 -1.625,-1.54 -4.552,1.931 -4.552,1.931 l 1.52,9.922 z" style={{ fill: "#412104", fillOpacity: "1", fillRule: "nonzero", stroke: "none" }} transform="matrix(1.3333333,0,0,-1.3333333,492.58547,648.40747)" clipPath="url(#YB_DEF__clipPath1084)" id="YB_DEF__path1085" />
          </g>
          <path id="YB_DEF__YUSUF_BACK_RIG__path1087" d="m 0,0 c 0,-1.904 -1.197,-3.447 -2.673,-3.447 -1.477,0 -2.674,1.543 -2.674,3.447 0,1.904 1.197,3.447 2.674,3.447 C -1.197,3.447 0,1.904 0,0" style={{ fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,395.6568,682.49693)" clipPath="url(#YB_DEF__clipPath1088)" />
          <g opacity="0.100006" id="YB_DEF__YUSUF_BACK_RIG__g1090" clipPath="url(#YB_DEF__clipPath1091)">
            <path d="m 0,0 c 0,0 1.858,-12.935 0.232,-14.931 -1.625,-1.996 -4.552,2.502 -4.552,2.502 L -2.8,0.426 Z" style={{ fill: "#412104", fillOpacity: "1", fillRule: "nonzero", stroke: "none" }} transform="matrix(1.3333333,0,0,-1.3333333,383.87253,644.7336)" clipPath="url(#YB_DEF__clipPath1089)" id="YB_DEF__path1090" />
          </g>
          <g opacity="0.100006" id="YB_DEF__YUSUF_BACK_RIG__g1093" clipPath="url(#YB_DEF__clipPath1094)">
            <path d="m 0,0 3.216,5.115 0.701,2.69 2.475,3.042 1.494,-0.044 c 0,0 -3.035,-10.273 -4.944,-12.302 z" style={{ fill: "#412104", fillOpacity: "1", fillRule: "nonzero", stroke: "none" }} transform="matrix(1.3333333,0,0,-1.3333333,475.49827,694.1072)" clipPath="url(#YB_DEF__clipPath1092)" id="YB_DEF__path1093" />
          </g>
          <g opacity="0.100006" id="YB_DEF__YUSUF_BACK_RIG__g1096" clipPath="url(#YB_DEF__clipPath1097)">
            <path d="m 0,0 -3.1,5.227 -0.705,2.797 -2.489,3.164 -1.503,-0.046 c 0,0 3.053,-10.683 4.838,-12.701 z" style={{ fill: "#412104", fillOpacity: "1", fillRule: "nonzero", stroke: "none" }} transform="matrix(1.3333333,0,0,-1.3333333,396.0132,695.15653)" clipPath="url(#YB_DEF__clipPath1095)" id="YB_DEF__path1096" />
          </g>
          <path id="YB_DEF__YUSUF_BACK_RIG__path1098" d="m 0,0 c 0,0 16.33,80.515 7.357,97.163 -0.15,0.279 -0.307,0.542 -0.471,0.786 0,0 2.187,6.53 -6.51,36.266 0,0 14.287,67.882 4.582,74.698 -9.704,6.815 -31.135,9.087 -48.117,1.554 -14.819,-6.573 11.454,-90.043 17.137,-110.567 0.832,-3.004 1.042,-6.14 0.633,-9.234 -1.716,-13.009 -4.99,-52.035 10.366,-90.707 0,0 11.182,-0.198 15.023,0.041" style={{ fill: "#1a1a2a", fillOpacity: "1", fillRule: "nonzero", stroke: "none" }} transform="matrix(1.3333333,0,0,-1.3333333,500.4924,1309.3573)" clipPath="url(#YB_DEF__clipPath1099)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1100" d="m 0,0 c 0,0 16.33,80.515 7.357,97.163 -0.15,0.279 -0.307,0.542 -0.471,0.786 0,0 2.187,6.53 -6.51,36.266 0,0 14.287,67.882 4.582,74.698 -9.704,6.815 -31.135,9.087 -48.117,1.554 -14.819,-6.573 11.454,-90.043 17.137,-110.567 0.832,-3.004 1.042,-6.14 0.633,-9.234 -1.716,-13.009 -4.99,-52.035 10.366,-90.707 0,0 11.182,-0.198 15.023,0.041 z" style={{ fill: "none", stroke: "#0a0a12", strokeWidth: "2.5", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,500.4924,1309.3573)" clipPath="url(#YB_DEF__clipPath1101)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1102" d="m 0,0 c 0,0 -16.361,80.515 -7.371,97.163 0.151,0.279 0.308,0.542 0.472,0.786 0,0 -2.191,6.53 6.522,36.266 0,0 -14.843,68.377 -5.12,75.193 9.723,6.815 31.194,9.087 48.209,1.554 C 57.559,204.389 31.765,120.424 26.071,99.9 25.238,96.896 25.028,93.76 25.437,90.666 27.156,77.657 30.437,38.631 15.052,-0.041 15.052,-0.041 3.849,-0.239 0,0" style={{ fill: "#1a1a2a", fillOpacity: "1", fillRule: "nonzero", stroke: "#0a0a12", strokeWidth: "2.5", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,359.95893,1312.7093)" clipPath="url(#YB_DEF__clipPath1103)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1104" d="M 0,0 C -0.261,0.192 -0.432,0.501 -0.437,0.849 L -3.44,228.237" style={{ fill: "#0053d4", fillOpacity: "1", fillRule: "nonzero", stroke: "#1b0000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,445.3736,1059.2033)" clipPath="url(#YB_DEF__clipPath1105)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1106" d="m 0,0 c -0.007,0.525 0.389,0.978 0.937,1.07 l 13.635,4.321 c 0.215,0.036 0.603,0.259 0.805,0.179 l 52.045,-14.6 c 0.141,-0.039 0.274,-0.082 0.41,-0.137 2.744,-1.114 7.469,-4.22 9.314,-8.625 12.837,-30.655 5.809,-130.603 2.964,-155.171 -0.278,-2.399 -2.527,-4.15 -5.073,-3.96 l -6.947,0.517 c -3.539,-1.779 -8.22,24.831 -7.923,54.713 0.175,17.621 1.694,36.045 1.698,47.228 0,1.392 -0.649,1.345 -0.718,-0.046 l -5.885,-125.776 c -0.003,-0.062 -0.586,-3.835 -0.583,-3.897 0.206,-3.351 2.402,-6.628 1.338,-12.974 -0.423,-2.518 0.315,-2.486 -0.761,-9.687 -0.079,-0.529 -6.11,0.713 -6.676,0.713 l -47.609,-2.796 c -0.251,0 3.148,2.664 2.96,2.796" style={{ fill: "#0053d4", fillOpacity: "1", fillRule: "nonzero", stroke: "#1b0000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,434.548,754.88733)" clipPath="url(#YB_DEF__clipPath1107)" />
          <path id="YB_DEF__YUSUF_BACK_RIG__path1108" d="m 0,0 c -0.891,0 -2.237,0.337 -3.572,0.574 l -11.22,2.456 c -0.53,0.094 -0.93,0.208 -1.426,0 L -66.034,-8.953 c -2.418,-0.582 -4.592,-1.926 -6.145,-3.869 -17.76,-22.221 -26.916,-135.141 -25.663,-156.841 0.068,-1.17 2.631,-2.241 4.218,-2.615 0.534,-0.126 1.063,-0.27 1.574,-0.469 l 3.068,-1.201 c 3.892,-2.07 19.716,40.45 25.519,72.36 0.036,0.195 0.07,0.389 0.105,0.582 0.556,3.155 2.136,-1.746 2.404,-5.098 0.023,-0.286 0.027,-0.57 0.025,-0.857 l -0.504,-75.366 c 0,-0.008 0.003,-0.043 0.007,-0.097 0.075,-0.897 0.043,-1.805 -0.096,-2.694 l -2.383,-15.254 c -0.032,-0.208 -0.059,-0.416 -0.08,-0.625 l -1.337,-13.418 c -0.559,-5.612 3.097,-10.779 8.575,-12.12 l 13.672,-3.346 c 0.88,-0.215 1.784,-0.324 2.691,-0.324 h 37.571 c 1.544,0 2.796,1.251 2.796,2.795" style={{ fill: "#0053d4", fillOpacity: "1", fillRule: "nonzero", stroke: "#1b0000", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" }} transform="matrix(1.3333333,0,0,-1.3333333,439.6172,752.4092)" clipPath="url(#YB_DEF__clipPath1109)" />
        </g>
        <clipPath id="YB_CLIP_ARM_L_SHOULDER" clipPathUnits="userSpaceOnUse">
          <rect x="260" y="740" width="105" height="60" />
        </clipPath>
        <clipPath id="YB_CLIP_ARM_L_UPPER" clipPathUnits="userSpaceOnUse">
          <rect x="260" y="800" width="130" height="84" />
        </clipPath>
        <clipPath id="YB_CLIP_ARM_L_FOREARM" clipPathUnits="userSpaceOnUse">
          <rect x="260" y="884" width="130" height="135" />
        </clipPath>
        <clipPath id="YB_CLIP_ARM_R_SHOULDER" clipPathUnits="userSpaceOnUse">
          <rect x="500" y="740" width="80" height="60" />
        </clipPath>
        <clipPath id="YB_CLIP_ARM_R_UPPER" clipPathUnits="userSpaceOnUse">
          <rect x="480" y="800" width="100" height="84" />
        </clipPath>
        <clipPath id="YB_CLIP_ARM_R_FOREARM" clipPathUnits="userSpaceOnUse">
          <rect x="480" y="884" width="100" height="135" />
        </clipPath>
        <clipPath id="YB_CLIP_TORSO_L" clipPathUnits="userSpaceOnUse">
          <rect x="365" y="700" width="80" height="380" />
          <rect x="350" y="1010" width="25" height="70" />
        </clipPath>
        <clipPath id="YB_CLIP_TORSO_R" clipPathUnits="userSpaceOnUse">
          <rect x="434" y="700" width="72" height="380" />
        </clipPath>
        <clipPath id="YB_CLIP_LEG_L_THIGH" clipPathUnits="userSpaceOnUse">
          <rect x="300" y="990" width="145" height="179" />
        </clipPath>
        <clipPath id="YB_CLIP_LEG_L_CALF" clipPathUnits="userSpaceOnUse">
          <rect x="300" y="1169" width="145" height="190" />
        </clipPath>
        <clipPath id="YB_CLIP_LEG_R_THIGH" clipPathUnits="userSpaceOnUse">
          <rect x="430" y="990" width="145" height="179" />
        </clipPath>
        <clipPath id="YB_CLIP_LEG_R_CALF" clipPathUnits="userSpaceOnUse">
          <rect x="430" y="1169" width="145" height="190" />
        </clipPath>
        <clipPath id="YB_CLIP_PATCH_SHOULDER_L" clipPathUnits="userSpaceOnUse">
          <ellipse cx="365" cy="767" rx="12" ry="14" />
        </clipPath>
        <clipPath id="YB_CLIP_PATCH_SHOULDER_R" clipPathUnits="userSpaceOnUse">
          <ellipse cx="500" cy="774" rx="12" ry="14" />
        </clipPath>
        <clipPath id="YB_CLIP_PATCH_ELBOW_L" clipPathUnits="userSpaceOnUse">
          <ellipse cx="351" cy="884" rx="10" ry="14" />
        </clipPath>
        <clipPath id="YB_CLIP_PATCH_ELBOW_R" clipPathUnits="userSpaceOnUse">
          <ellipse cx="517" cy="884" rx="10" ry="14" />
        </clipPath>
        <clipPath id="YB_CLIP_PATCH_HIP_L" clipPathUnits="userSpaceOnUse">
          <ellipse cx="391" cy="1025" rx="18" ry="18" />
        </clipPath>
        <clipPath id="YB_CLIP_PATCH_HIP_R" clipPathUnits="userSpaceOnUse">
          <ellipse cx="472" cy="1025" rx="18" ry="18" />
        </clipPath>
        <clipPath id="YB_CLIP_PATCH_KNEE_L" clipPathUnits="userSpaceOnUse">
          <ellipse cx="392" cy="1169" rx="18" ry="22" />
        </clipPath>
        <clipPath id="YB_CLIP_PATCH_KNEE_R" clipPathUnits="userSpaceOnUse">
          <ellipse cx="472" cy="1169" rx="18" ry="22" />
        </clipPath>
        <clipPath id="YB_CLIP_UNDERLAY_ELBOW_L" clipPathUnits="userSpaceOnUse">
          <ellipse cx="351" cy="884" rx="18" ry="50" />
        </clipPath>
        <clipPath id="YB_CLIP_UNDERLAY_ELBOW_R" clipPathUnits="userSpaceOnUse">
          <ellipse cx="517" cy="884" rx="18" ry="50" />
        </clipPath>
        <clipPath id="YB_CLIP_UNDERLAY_HIP_L" clipPathUnits="userSpaceOnUse">
          <ellipse cx="391" cy="1040" rx="30" ry="70" />
        </clipPath>
        <clipPath id="YB_CLIP_UNDERLAY_HIP_R" clipPathUnits="userSpaceOnUse">
          <ellipse cx="472" cy="1040" rx="30" ry="70" />
        </clipPath>
        <clipPath id="YB_CLIP_UNDERLAY_KNEE_L" clipPathUnits="userSpaceOnUse">
          <ellipse cx="392" cy="1169" rx="25" ry="60" />
        </clipPath>
        <clipPath id="YB_CLIP_UNDERLAY_KNEE_R" clipPathUnits="userSpaceOnUse">
          <ellipse cx="472" cy="1169" rx="25" ry="60" />
        </clipPath>
      </defs>
      <g id="YUSUF_BACK_RIG" transform={`translate(0 ${bodyY})`} data-rig-part="character-back">
        <g id="HIP_L_BACK" transform={`rotate(${leftHipRotation} 391 1025)`} data-rig-parent="YUSUF_BACK_RIG" data-rig-part="hip-l">
          <g id="THIGH_L_BACK" data-rig-parent="HIP_L_BACK" data-rig-part="thigh-l">
            <g id="PANTS_THIGH_L_BACK" data-rig-parent="THIGH_L_BACK" data-rig-part="pants-thigh-l">
              <use id="YB_L_PANTS_THIGH_00" href="#YB_DEF__YUSUF_BACK_RIG__path1102" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1102" clipPath="url(#YB_CLIP_LEG_L_THIGH)" />
            </g>
            <use id="YB_L_HIP_PATCH_00" href="#YB_DEF__YUSUF_BACK_RIG__path1102" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1102" clipPath="url(#YB_CLIP_PATCH_HIP_L)" />
            <use id="YB_L_KNEE_PATCH_THIGH_00" href="#YB_DEF__YUSUF_BACK_RIG__path1102" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1102" clipPath="url(#YB_CLIP_UNDERLAY_KNEE_L)" style={{ stroke: "none" }} />
            <g id="CALF_L_BACK" transform={`rotate(${leftKneeRotation} 392 1169)`} data-rig-parent="THIGH_L_BACK" data-rig-part="calf-l">
              <use id="YB_L_KNEE_PATCH_00" href="#YB_DEF__YUSUF_BACK_RIG__path1102" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1102" clipPath="url(#YB_CLIP_PATCH_KNEE_L)" />
              <g id="PANTS_CALF_L_BACK" data-rig-parent="CALF_L_BACK" data-rig-part="pants-calf-l">
                <use id="YB_L_PANTS_CALF_00" href="#YB_DEF__YUSUF_BACK_RIG__path1102" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1102" clipPath="url(#YB_CLIP_LEG_L_CALF)" />
              </g>
              <g id="FOOT_L_BACK" data-rig-parent="CALF_L_BACK" data-rig-part="foot-l">
                <use id="YB_L_FOOT_SKIN" href="#YB_DEF__YUSUF_BACK_RIG__path866" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path866" />
                <g id="SHOE_L_BACK" data-rig-parent="FOOT_L_BACK" data-rig-part="shoe-l">
                  <use id="YB_L_SHOE_00" href="#YB_DEF__YUSUF_BACK_RIG__path930" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path930" />
                  <use id="YB_L_SHOE_01" href="#YB_DEF__YUSUF_BACK_RIG__path932" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path932" />
                  <use id="YB_L_SHOE_02" href="#YB_DEF__YUSUF_BACK_RIG__g935" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__g935" />
                  <use id="YB_L_SHOE_03" href="#YB_DEF__YUSUF_BACK_RIG__path937" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path937" />
                  <use id="YB_L_SHOE_04" href="#YB_DEF__YUSUF_BACK_RIG__path939" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path939" />
                  <use id="YB_L_SHOE_05" href="#YB_DEF__YUSUF_BACK_RIG__path941" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path941" />
                  <use id="YB_L_SHOE_06" href="#YB_DEF__YUSUF_BACK_RIG__g944" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__g944" />
                  <use id="YB_L_SHOE_07" href="#YB_DEF__YUSUF_BACK_RIG__g947" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__g947" />
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id="HIP_R_BACK" transform={`rotate(${rightHipRotation} 472 1025)`} data-rig-parent="YUSUF_BACK_RIG" data-rig-part="hip-r">
          <g id="THIGH_R_BACK" data-rig-parent="HIP_R_BACK" data-rig-part="thigh-r">
            <g id="PANTS_THIGH_R_BACK" data-rig-parent="THIGH_R_BACK" data-rig-part="pants-thigh-r">
              <use id="YB_R_PANTS_THIGH_00" href="#YB_DEF__YUSUF_BACK_RIG__path1098" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1098" clipPath="url(#YB_CLIP_LEG_R_THIGH)" />
              <use id="YB_R_PANTS_THIGH_01" href="#YB_DEF__YUSUF_BACK_RIG__path1100" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1100" clipPath="url(#YB_CLIP_LEG_R_THIGH)" />
            </g>
            <use id="YB_R_HIP_PATCH_00" href="#YB_DEF__YUSUF_BACK_RIG__path1098" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1098" clipPath="url(#YB_CLIP_PATCH_HIP_R)" />
            <use id="YB_R_HIP_PATCH_01" href="#YB_DEF__YUSUF_BACK_RIG__path1100" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1100" clipPath="url(#YB_CLIP_PATCH_HIP_R)" />
            <use id="YB_R_KNEE_PATCH_THIGH_00" href="#YB_DEF__YUSUF_BACK_RIG__path1098" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1098" clipPath="url(#YB_CLIP_UNDERLAY_KNEE_R)" style={{ stroke: "none" }} />
            <g id="CALF_R_BACK" transform={`rotate(${rightKneeRotation} 472 1169)`} data-rig-parent="THIGH_R_BACK" data-rig-part="calf-r">
              <use id="YB_R_KNEE_PATCH_00" href="#YB_DEF__YUSUF_BACK_RIG__path1098" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1098" clipPath="url(#YB_CLIP_PATCH_KNEE_R)" />
              <use id="YB_R_KNEE_PATCH_01" href="#YB_DEF__YUSUF_BACK_RIG__path1100" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1100" clipPath="url(#YB_CLIP_PATCH_KNEE_R)" />
              <g id="PANTS_CALF_R_BACK" data-rig-parent="CALF_R_BACK" data-rig-part="pants-calf-r">
                <use id="YB_R_PANTS_CALF_00" href="#YB_DEF__YUSUF_BACK_RIG__path1098" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1098" clipPath="url(#YB_CLIP_LEG_R_CALF)" />
                <use id="YB_R_PANTS_CALF_01" href="#YB_DEF__YUSUF_BACK_RIG__path1100" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1100" clipPath="url(#YB_CLIP_LEG_R_CALF)" />
              </g>
              <g id="FOOT_R_BACK" data-rig-parent="CALF_R_BACK" data-rig-part="foot-r">
                <use id="YB_R_FOOT_SKIN" href="#YB_DEF__YUSUF_BACK_RIG__path864" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path864" />
                <g id="SHOE_R_BACK" data-rig-parent="FOOT_R_BACK" data-rig-part="shoe-r">
                  <use id="YB_R_SHOE_00" href="#YB_DEF__YUSUF_BACK_RIG__path911" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path911" />
                  <use id="YB_R_SHOE_01" href="#YB_DEF__YUSUF_BACK_RIG__path913" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path913" />
                  <use id="YB_R_SHOE_02" href="#YB_DEF__YUSUF_BACK_RIG__g916" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__g916" />
                  <use id="YB_R_SHOE_03" href="#YB_DEF__YUSUF_BACK_RIG__path918" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path918" />
                  <use id="YB_R_SHOE_04" href="#YB_DEF__YUSUF_BACK_RIG__path920" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path920" />
                  <use id="YB_R_SHOE_05" href="#YB_DEF__YUSUF_BACK_RIG__path922" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path922" />
                  <use id="YB_R_SHOE_06" href="#YB_DEF__YUSUF_BACK_RIG__g925" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__g925" />
                  <use id="YB_R_SHOE_07" href="#YB_DEF__YUSUF_BACK_RIG__g928" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__g928" />
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id="TORSO_PELVIS_BACK" data-rig-parent="YUSUF_BACK_RIG" data-rig-part="torso-pelvis">
          <g id="NECK_BACK" data-rig-parent="TORSO_PELVIS_BACK" data-rig-part="neck">
            <use id="YB_NECK_SKIN" href="#YB_DEF__YUSUF_BACK_RIG__path846" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path846" />
            <use id="YB_NECK_SHADOW" href="#YB_DEF__YUSUF_BACK_RIG__g959" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__g959" />
          </g>
          <g id="PELVIS_PATCHES_BACK" data-rig-parent="TORSO_PELVIS_BACK" data-rig-part="pelvis-patches">
            <use id="YB_TORSO_HIP_PATCH_L" href="#YB_DEF__YUSUF_BACK_RIG__path1102" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1102" clipPath="url(#YB_CLIP_UNDERLAY_HIP_L)" style={{ stroke: "none" }} />
            <use id="YB_TORSO_HIP_PATCH_R_FILL" href="#YB_DEF__YUSUF_BACK_RIG__path1098" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1098" clipPath="url(#YB_CLIP_UNDERLAY_HIP_R)" />
          </g>
          <g id="TSHIRT_BODY_BACK" data-rig-parent="TORSO_PELVIS_BACK" data-rig-part="tshirt-body">
            <path
              id="YB_TSHIRT_CORE_FILL"
              d="M350 770 H515 V1038 H350 Z"
              fill="#0053d4"
              stroke="none"
              data-rig-role="torso-gap-underlay"
            />
            <use id="YB_TSHIRT_BODY_L" href="#YB_DEF__YUSUF_BACK_RIG__path1108" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1108" clipPath="url(#YB_CLIP_TORSO_L)" />
            <use id="YB_TSHIRT_BODY_R" href="#YB_DEF__YUSUF_BACK_RIG__path1106" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1106" clipPath="url(#YB_CLIP_TORSO_R)" />
          </g>
        </g>
        <g id="ARM_L_BACK" data-rig-parent="YUSUF_BACK_RIG" data-rig-part="arm-l">
          <g id="SHOULDER_L_BACK" transform={`rotate(${leftArmSwing} 365 767)`} data-rig-parent="ARM_L_BACK" data-rig-part="shoulder-l">
            <use id="YB_L_SHOULDER_PATCH" href="#YB_DEF__YUSUF_BACK_RIG__path1108" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1108" clipPath="url(#YB_CLIP_PATCH_SHOULDER_L)" />
            <g id="SHOULDER_CLOTH_L_BACK" data-rig-parent="SHOULDER_L_BACK" data-rig-part="shoulder-cloth-l">
              <use id="YB_L_SHOULDER_CLOTH" href="#YB_DEF__YUSUF_BACK_RIG__path1108" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1108" clipPath="url(#YB_CLIP_ARM_L_SHOULDER)" />
            </g>
            <g id="UPPER_ARM_L_BACK" data-rig-parent="SHOULDER_L_BACK" data-rig-part="upper-arm-l">
              <g id="UPPER_SLEEVE_L_BACK" data-rig-parent="UPPER_ARM_L_BACK" data-rig-part="upper-sleeve-l">
                <use id="YB_L_UPPER_SLEEVE" href="#YB_DEF__YUSUF_BACK_RIG__path1108" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1108" clipPath="url(#YB_CLIP_ARM_L_UPPER)" />
              </g>
              <use id="YB_L_ELBOW_PATCH_UPPER" href="#YB_DEF__YUSUF_BACK_RIG__path1108" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1108" clipPath="url(#YB_CLIP_UNDERLAY_ELBOW_L)" style={{ stroke: "none" }} />
              <g id="FOREARM_L_BACK" transform={`rotate(${leftElbowRotation} 351 884)`} data-rig-parent="UPPER_ARM_L_BACK" data-rig-part="forearm-l">
                <use id="YB_L_ELBOW_PATCH" href="#YB_DEF__YUSUF_BACK_RIG__path1108" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1108" clipPath="url(#YB_CLIP_PATCH_ELBOW_L)" />
                <g id="FOREARM_SLEEVE_L_BACK" data-rig-parent="FOREARM_L_BACK" data-rig-part="forearm-sleeve-l">
                  <use id="YB_L_FOREARM_SLEEVE" href="#YB_DEF__YUSUF_BACK_RIG__path1108" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1108" clipPath="url(#YB_CLIP_ARM_L_FOREARM)" />
                </g>
                <g id="HAND_L_BACK" transform={`rotate(${leftHandRotation} 329 990)`} data-rig-parent="FOREARM_L_BACK" data-rig-part="hand-l">
                  <use id="YB_L_HAND_00" href="#YB_DEF__YUSUF_BACK_RIG__path868" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path868" />
                  <use id="YB_L_HAND_01" href="#YB_DEF__YUSUF_BACK_RIG__path870" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path870" />
                  <use id="YB_L_HAND_02" href="#YB_DEF__YUSUF_BACK_RIG__path872" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path872" />
                  <use id="YB_L_HAND_03" href="#YB_DEF__YUSUF_BACK_RIG__path874" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path874" />
                  <use id="YB_L_HAND_04" href="#YB_DEF__YUSUF_BACK_RIG__path876" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path876" />
                  <use id="YB_L_HAND_05" href="#YB_DEF__YUSUF_BACK_RIG__path878" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path878" />
                  <use id="YB_L_HAND_06" href="#YB_DEF__YUSUF_BACK_RIG__g951" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__g951" />
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id="ARM_R_BACK" data-rig-parent="YUSUF_BACK_RIG" data-rig-part="arm-r">
          <g id="SHOULDER_R_BACK" transform={`rotate(${rightArmSwing} 500 774)`} data-rig-parent="ARM_R_BACK" data-rig-part="shoulder-r">
            <use id="YB_R_SHOULDER_PATCH" href="#YB_DEF__YUSUF_BACK_RIG__path1106" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1106" clipPath="url(#YB_CLIP_PATCH_SHOULDER_R)" />
            <g id="SHOULDER_CLOTH_R_BACK" data-rig-parent="SHOULDER_R_BACK" data-rig-part="shoulder-cloth-r">
              <use id="YB_R_SHOULDER_CLOTH" href="#YB_DEF__YUSUF_BACK_RIG__path1106" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1106" clipPath="url(#YB_CLIP_ARM_R_SHOULDER)" />
            </g>
            <g id="UPPER_ARM_R_BACK" data-rig-parent="SHOULDER_R_BACK" data-rig-part="upper-arm-r">
              <g id="UPPER_SLEEVE_R_BACK" data-rig-parent="UPPER_ARM_R_BACK" data-rig-part="upper-sleeve-r">
                <use id="YB_R_UPPER_SLEEVE" href="#YB_DEF__YUSUF_BACK_RIG__path1106" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1106" clipPath="url(#YB_CLIP_ARM_R_UPPER)" />
              </g>
              <use id="YB_R_ELBOW_PATCH_UPPER" href="#YB_DEF__YUSUF_BACK_RIG__path1106" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1106" clipPath="url(#YB_CLIP_UNDERLAY_ELBOW_R)" style={{ stroke: "none" }} />
              <g id="FOREARM_R_BACK" transform={`rotate(${rightElbowRotation} 517 884)`} data-rig-parent="UPPER_ARM_R_BACK" data-rig-part="forearm-r">
                <use id="YB_R_ELBOW_PATCH" href="#YB_DEF__YUSUF_BACK_RIG__path1106" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1106" clipPath="url(#YB_CLIP_PATCH_ELBOW_R)" />
                <g id="FOREARM_SLEEVE_R_BACK" data-rig-parent="FOREARM_R_BACK" data-rig-part="forearm-sleeve-r">
                  <use id="YB_R_FOREARM_SLEEVE" href="#YB_DEF__YUSUF_BACK_RIG__path1106" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1106" clipPath="url(#YB_CLIP_ARM_R_FOREARM)" />
                </g>
                <g id="HAND_R_BACK" transform={`rotate(${rightHandRotation} 523 991)`} data-rig-parent="FOREARM_R_BACK" data-rig-part="hand-r">
                  <use id="YB_R_HAND_00" href="#YB_DEF__YUSUF_BACK_RIG__path884" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path884" />
                  <use id="YB_R_HAND_01" href="#YB_DEF__YUSUF_BACK_RIG__path886" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path886" />
                  <use id="YB_R_HAND_02" href="#YB_DEF__YUSUF_BACK_RIG__path888" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path888" />
                  <use id="YB_R_HAND_03" href="#YB_DEF__YUSUF_BACK_RIG__path890" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path890" />
                  <use id="YB_R_HAND_04" href="#YB_DEF__YUSUF_BACK_RIG__path892" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path892" />
                  <use id="YB_R_HAND_05" href="#YB_DEF__YUSUF_BACK_RIG__path894" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path894" />
                  <use id="YB_R_HAND_06" href="#YB_DEF__YUSUF_BACK_RIG__g954" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__g954" />
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id="HEAD_BACK" transform={`rotate(${headRotation} 436 714)`} data-rig-parent="YUSUF_BACK_RIG" data-rig-part="head">
          <g id="EAR_L_BACK" data-rig-parent="HEAD_BACK" data-rig-part="ear-left">
            <use id="YB_EAR_L_FILL" href="#YB_DEF__YUSUF_BACK_RIG__path840" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path840" />
            <use id="YB_EAR_L_LINE" href="#YB_DEF__YUSUF_BACK_RIG__path842" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path842" />
          </g>
          <g id="EAR_R_BACK" data-rig-parent="HEAD_BACK" data-rig-part="ear-right">
            <use id="YB_EAR_R_FILL" href="#YB_DEF__YUSUF_BACK_RIG__path836" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path836" />
            <use id="YB_EAR_R_LINE" href="#YB_DEF__YUSUF_BACK_RIG__path838" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path838" />
          </g>
          <use id="YB_HEAD_SKIN" href="#YB_DEF__YUSUF_BACK_RIG__path844" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path844" />
          <g id="HAIR_BACK" data-rig-parent="HEAD_BACK" data-rig-part="hair">
            <use id="YB_HAIR_SHADOW_BASE" href="#YB_DEF__YUSUF_BACK_RIG__g909" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__g909" />
            <use id="YB_HAIR_000" href="#YB_DEF__YUSUF_BACK_RIG__path967" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path967" />
            <use id="YB_HAIR_001" href="#YB_DEF__YUSUF_BACK_RIG__path969" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path969" />
            <use id="YB_HAIR_002" href="#YB_DEF__YUSUF_BACK_RIG__path971" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path971" />
            <use id="YB_HAIR_003" href="#YB_DEF__YUSUF_BACK_RIG__path973" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path973" />
            <use id="YB_HAIR_004" href="#YB_DEF__YUSUF_BACK_RIG__path975" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path975" />
            <use id="YB_HAIR_005" href="#YB_DEF__YUSUF_BACK_RIG__path977" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path977" />
            <use id="YB_HAIR_006" href="#YB_DEF__YUSUF_BACK_RIG__path979" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path979" />
            <use id="YB_HAIR_007" href="#YB_DEF__YUSUF_BACK_RIG__path981" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path981" />
            <use id="YB_HAIR_008" href="#YB_DEF__YUSUF_BACK_RIG__path983" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path983" />
            <use id="YB_HAIR_009" href="#YB_DEF__YUSUF_BACK_RIG__path985" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path985" />
            <use id="YB_HAIR_010" href="#YB_DEF__YUSUF_BACK_RIG__path987" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path987" />
            <use id="YB_HAIR_011" href="#YB_DEF__YUSUF_BACK_RIG__path989" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path989" />
            <use id="YB_HAIR_012" href="#YB_DEF__YUSUF_BACK_RIG__path991" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path991" />
            <use id="YB_HAIR_013" href="#YB_DEF__YUSUF_BACK_RIG__path993" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path993" />
            <use id="YB_HAIR_014" href="#YB_DEF__YUSUF_BACK_RIG__path995" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path995" />
            <use id="YB_HAIR_015" href="#YB_DEF__YUSUF_BACK_RIG__path997" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path997" />
            <use id="YB_HAIR_016" href="#YB_DEF__YUSUF_BACK_RIG__path999" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path999" />
            <use id="YB_HAIR_017" href="#YB_DEF__YUSUF_BACK_RIG__path1001" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1001" />
            <use id="YB_HAIR_018" href="#YB_DEF__YUSUF_BACK_RIG__path1003" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1003" />
            <use id="YB_HAIR_019" href="#YB_DEF__YUSUF_BACK_RIG__g1006" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__g1006" />
            <use id="YB_HAIR_020" href="#YB_DEF__YUSUF_BACK_RIG__g1009" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__g1009" />
            <use id="YB_HAIR_021" href="#YB_DEF__YUSUF_BACK_RIG__g1012" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__g1012" />
            <use id="YB_HAIR_022" href="#YB_DEF__YUSUF_BACK_RIG__g1015" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__g1015" />
            <use id="YB_HAIR_023" href="#YB_DEF__YUSUF_BACK_RIG__g1018" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__g1018" />
            <use id="YB_HAIR_024" href="#YB_DEF__YUSUF_BACK_RIG__path1020" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1020" />
            <use id="YB_HAIR_025" href="#YB_DEF__YUSUF_BACK_RIG__path1022" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1022" />
            <use id="YB_HAIR_026" href="#YB_DEF__YUSUF_BACK_RIG__path1024" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1024" />
            <use id="YB_HAIR_027" href="#YB_DEF__YUSUF_BACK_RIG__path1026" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1026" />
            <use id="YB_HAIR_028" href="#YB_DEF__YUSUF_BACK_RIG__path1028" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1028" />
            <use id="YB_HAIR_029" href="#YB_DEF__YUSUF_BACK_RIG__path1030" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1030" />
            <use id="YB_HAIR_030" href="#YB_DEF__YUSUF_BACK_RIG__path1032" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1032" />
            <use id="YB_HAIR_031" href="#YB_DEF__YUSUF_BACK_RIG__path1034" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1034" />
            <use id="YB_HAIR_032" href="#YB_DEF__YUSUF_BACK_RIG__path1036" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1036" />
            <use id="YB_HAIR_033" href="#YB_DEF__YUSUF_BACK_RIG__path1038" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1038" />
            <use id="YB_HAIR_034" href="#YB_DEF__YUSUF_BACK_RIG__path1040" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1040" />
            <use id="YB_HAIR_035" href="#YB_DEF__YUSUF_BACK_RIG__path1042" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1042" />
            <use id="YB_HAIR_036" href="#YB_DEF__YUSUF_BACK_RIG__path1044" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1044" />
            <use id="YB_HAIR_037" href="#YB_DEF__YUSUF_BACK_RIG__path1046" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1046" />
            <use id="YB_HAIR_038" href="#YB_DEF__YUSUF_BACK_RIG__path1048" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1048" />
            <use id="YB_HAIR_039" href="#YB_DEF__YUSUF_BACK_RIG__path1050" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1050" />
            <use id="YB_HAIR_040" href="#YB_DEF__YUSUF_BACK_RIG__path1052" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1052" />
            <use id="YB_HAIR_041" href="#YB_DEF__YUSUF_BACK_RIG__path1054" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1054" />
            <use id="YB_HAIR_042" href="#YB_DEF__YUSUF_BACK_RIG__path1056" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1056" />
            <use id="YB_HAIR_043" href="#YB_DEF__YUSUF_BACK_RIG__path1058" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1058" />
            <use id="YB_HAIR_044" href="#YB_DEF__YUSUF_BACK_RIG__g1061" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__g1061" />
            <use id="YB_HAIR_045" href="#YB_DEF__YUSUF_BACK_RIG__path1063" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1063" />
            <use id="YB_HAIR_046" href="#YB_DEF__YUSUF_BACK_RIG__path1065" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1065" />
            <use id="YB_HAIR_047" href="#YB_DEF__YUSUF_BACK_RIG__path1067" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1067" />
            <use id="YB_HAIR_048" href="#YB_DEF__YUSUF_BACK_RIG__path1069" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1069" />
            <use id="YB_HAIR_049" href="#YB_DEF__YUSUF_BACK_RIG__path1071" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1071" />
            <use id="YB_HAIR_050" href="#YB_DEF__YUSUF_BACK_RIG__path1073" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1073" />
            <use id="YB_HAIR_051" href="#YB_DEF__YUSUF_BACK_RIG__path1075" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1075" />
            <use id="YB_HAIR_052" href="#YB_DEF__YUSUF_BACK_RIG__path1077" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1077" />
            <use id="YB_HAIR_053" href="#YB_DEF__YUSUF_BACK_RIG__path1079" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1079" />
            <use id="YB_HAIR_054" href="#YB_DEF__YUSUF_BACK_RIG__g1082" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__g1082" />
            <use id="YB_HAIR_055" href="#YB_DEF__YUSUF_BACK_RIG__g1085" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__g1085" />
            <use id="YB_HAIR_056" href="#YB_DEF__YUSUF_BACK_RIG__path1087" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__path1087" />
            <use id="YB_HAIR_057" href="#YB_DEF__YUSUF_BACK_RIG__g1090" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__g1090" />
            <use id="YB_HAIR_058" href="#YB_DEF__YUSUF_BACK_RIG__g1093" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__g1093" />
            <use id="YB_HAIR_059" href="#YB_DEF__YUSUF_BACK_RIG__g1096" xlinkHref="#YB_DEF__YUSUF_BACK_RIG__g1096" />
          </g>
        </g>
      </g>
    </svg>
  );
};
