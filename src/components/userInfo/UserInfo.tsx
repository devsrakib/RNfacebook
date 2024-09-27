import { Image } from "react-native";

type GenericArray<T> = Array<T>;

export interface IRandomUser {
  id: string;
  isActive: boolean;
  picture: string;
  name: string;
  age: number;
  gender: string;
  profileImage?: ProfileAndCover;
  post?: Post;
  about: string;
  profile: string;
  route?: string;
}
interface Post {
  postText?: string;
  postImage?: string;
}

interface ProfileAndCover {
  profile?: string;
  cover?: string;
}

export const apiUrl: GenericArray<IRandomUser> = [
  {
    id: "65621511e9c489affe109d39",
    isActive: false,
    picture: "http://placehold.it/32x32",
    age: 30,
    name: "Maura Mann",
    gender: "female",
    about:
      "Dolor et nostrud veniam voluptate ex et occaecat mollit officia laborum. Occaecat nostrud cillum anim cupidatat commodo incididunt irure do pariatur ad officia sint cillum mollit. Cupidatat reprehenderit est dolor quis irure eu duis est voluptate pariatur laboris non reprehenderit. Deserunt laboris deserunt exercitation excepteur dolore enim sit. Laboris eu incididunt velit proident labore laborum in nostrud aliquip magna proident ullamco adipisicing.\r\n",
    profile:
      "https://images.unsplash.com/photo-1612535500858-06e800115812?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluc3RhZ3JhbSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "656215114dbf248a0b026618",
    isActive: true,
    picture: "http://placehold.it/32x32",
    age: 30,
    name: "Serrano Poole",
    gender: "male",
    about:
      "Eu aliquip officia nostrud consectetur tempor ipsum pariatur incididunt quis sint fugiat qui aliqua qui. Eu mollit amet consectetur ullamco consequat ad ullamco ullamco ea incididunt est voluptate anim aute. Pariatur ullamco amet ad qui sunt dolor quis est elit adipisicing non non ea nulla. Ea fugiat consectetur duis ex ea adipisicing voluptate. Dolore occaecat dolore reprehenderit et proident ea consectetur minim aliquip amet enim sit mollit.\r\n",
    profile:
      "https://images.unsplash.com/photo-1610024062303-e355e94c7a8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluc3RhZ3JhbSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "65621511e2d1db60ede9ac37",
    isActive: false,
    picture: "http://placehold.it/32x32",
    age: 27,
    name: "Hatfield Washington",
    gender: "male",
    about:
      "Ipsum deserunt velit ut minim est sit cupidatat. Enim ullamco id consequat consequat velit. Pariatur tempor elit eu velit qui. Ex irure id est laboris elit Lorem enim veniam adipisicing nisi esse veniam tempor. Deserunt nulla dolor labore nisi Lorem officia incididunt sunt labore sit. Aute reprehenderit commodo nulla qui pariatur proident minim ea enim aliquip esse.\r\n",
    profile:
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "6562151161c879b2eeaba238",
    isActive: true,
    picture: "http://placehold.it/32x32",
    age: 31,
    name: "Gregory Barrett",
    gender: "male",
    about:
      "Ut deserunt eiusmod cupidatat deserunt non laborum est ullamco. Labore elit dolore anim dolore nostrud qui excepteur adipisicing esse. Consequat amet irure dolor ex et pariatur sint culpa sunt. Do do irure mollit aliquip veniam duis consectetur aliqua ex aute. Incididunt sint officia culpa magna ea cillum et culpa excepteur nisi esse fugiat. Voluptate et exercitation eiusmod enim est in incididunt.\r\n",
    profile:
      "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?s=2048x2048&w=is&k=20&c=yif473DFhN451o-tNC1tASFFoP5QTOYcqS26dhEbv6U=",
  },
  {
    id: "656215110b4778bc5f8e0376",
    isActive: true,
    picture: "http://placehold.it/32x32",
    age: 39,
    name: "West Whitfield",
    gender: "male",
    about:
      "Sint proident Lorem irure commodo anim. Eiusmod ullamco Lorem mollit aliquip occaecat do et. Voluptate elit magna excepteur reprehenderit qui nulla magna. Laboris consectetur velit minim aliquip cillum minim consequat Lorem non dolor cillum nostrud elit in. Ea non magna quis sunt aliquip incididunt sint laboris enim consequat. Non incididunt qui veniam tempor et ut ea consectetur amet culpa duis exercitation qui.\r\n",
    profile:
      "https://media.istockphoto.com/id/866474934/photo/young-handsome-businessman-wearing-white-shirt-against-white-background.jpg?s=612x612&w=0&k=20&c=gFVEtFFcgO_Z7ZQORc28n-B5ariGKi72nZYWT1jnfiw=",
  },
  {
    id: "65621511ee05f2d02e35b84e",
    isActive: false,
    picture: "http://placehold.it/32x32",
    age: 20,
    name: "Reese Dunlap",
    gender: "male",
    about:
      "Proident dolore irure duis magna eiusmod sit duis reprehenderit qui pariatur. Aliqua anim irure veniam magna reprehenderit. Duis elit consectetur Lorem in. Do cillum veniam occaecat veniam occaecat magna ad minim in quis nisi pariatur.\r\n",
    profile:
      "https://media.istockphoto.com/id/1093999836/photo/close-up-portrait-of-handsome-business-man-laughing-isolated-on-gray-background.jpg?s=612x612&w=0&k=20&c=nFAnl3U1_qmmSJZdu2Zy5NmzM9YJMpcYLLEahNqLtfA=",
  },
  {
    id: "65621511b5f31db2022ca36d",
    isActive: false,
    picture: "http://placehold.it/32x32",
    age: 36,
    name: "Cobb Morse",
    gender: "male",
    about:
      "Ipsum ea veniam labore id ipsum anim nostrud cillum sit. Commodo laboris dolore qui cillum ex non aliquip. Laborum voluptate eiusmod anim commodo dolor. Aute do eiusmod consectetur ea occaecat.\r\n",
    profile:
      "https://media.istockphoto.com/id/1162303181/photo/close-up-portrait-of-attractive-confident-young-man-looking-neutral-relaxed-and-serious-in.jpg?s=612x612&w=0&k=20&c=X0Cc9ed32iOz1HA65Qn_z7MoBw8oxwXGk0EjHWVM6Yc=",
  },
  {
    id: "65621511d5309e688cc8431b",
    isActive: false,
    picture: "http://placehold.it/32x32",
    age: 21,
    name: "Sykes White",
    gender: "male",
    about:
      "Aliqua non sit minim Lorem dolor laborum nisi laborum aliqua sint consequat consectetur id. Laborum adipisicing qui reprehenderit dolore anim ad sunt aute excepteur proident. Ad ex qui ex laboris.\r\n",
    profile:
      "https://media.istockphoto.com/id/950974052/photo/young-man-with-a-happy-expression.jpg?s=2048x2048&w=is&k=20&c=5bh07CtcFravRaP7RTAEUk5uQ6_L27Px8cAdAQzcKpM=",
  },
  {
    id: "656215112ffa1d0b03f52f02",
    isActive: true,
    picture: "http://placehold.it/32x32",
    age: 25,
    name: "Burt Booth",
    gender: "male",
    about:
      "Dolor et irure laboris cupidatat sint culpa occaecat proident. Minim ipsum duis excepteur aute. Veniam reprehenderit culpa velit aute consectetur labore voluptate sunt pariatur.\r\n",
    profile:
      "https://media.istockphoto.com/id/1391942767/photo/smile-middle-man-in-white-shirt.jpg?s=612x612&w=0&k=20&c=saCD4QCLIhCxfFsU7XSEnQZ_vRYJHaC99I04T5Beh4c=",
  },
  {
    id: "656215118226abcbfc9900d4",
    isActive: true,
    picture: "http://placehold.it/32x32",
    age: 29,
    name: "Jannie Sykes",
    gender: "female",
    about:
      "Culpa aliquip aliqua consectetur pariatur. Amet adipisicing elit dolor sit ut proident laboris adipisicing esse anim in dolor do. Anim amet sint in anim ad esse cupidatat cupidatat dolore in reprehenderit. Occaecat eu excepteur sint fugiat.\r\n",
    profile:
      "https://www.catholicsingles.com/wp-content/uploads/2020/06/blog-header-3-768x464.png",
  },
  {
    id: "65621511cd8c23ffba3ac252",
    isActive: true,
    picture: "http://placehold.it/32x32",
    age: 20,
    name: "Cathy Kemp",
    gender: "female",
    about:
      "Commodo mollit ad velit voluptate dolore commodo deserunt tempor reprehenderit reprehenderit ut duis adipisicing ea. Nostrud nulla ex irure et id mollit nulla ut laborum veniam. Enim est deserunt labore ullamco culpa laboris sunt do non qui eiusmod eu incididunt ex.\r\n",
    profile:
      "https://www.catholicsingles.com/wp-content/uploads/2020/06/2-3.png",
  },
  {
    id: "6562151193e674670e0c70d1",
    isActive: true,
    picture: "http://placehold.it/32x32",
    age: 30,
    name: "Winifred Cortez",
    gender: "female",
    about:
      "Sunt ipsum officia culpa nisi incididunt sit. Enim voluptate sint tempor do ea sint aliqua tempor dolor nulla velit aliqua duis qui. Ea mollit non officia est adipisicing non pariatur duis cupidatat id cillum.\r\n",
    profile:
      "https://www.catholicsingles.com/wp-content/uploads/2020/06/5-1.png",
  },
  {
    id: "65621511e55585433f9424e4",
    isActive: false,
    picture: "http://placehold.it/32x32",
    age: 35,
    name: "Robles Vaughn",
    gender: "male",
    about:
      "Tempor irure nisi laborum consequat magna ut dolor dolore anim duis proident. Eu nisi dolore Lorem proident irure mollit aliqua aliquip. Qui occaecat mollit ex ipsum consectetur incididunt tempor Lorem exercitation ut laboris deserunt sunt. Occaecat enim ipsum dolore mollit ad ex adipisicing. Tempor mollit irure pariatur exercitation nulla irure. Adipisicing id dolore culpa magna et cupidatat irure sunt est.\r\n",
    profile:
      "https://www.catholicsingles.com/wp-content/uploads/2020/06/5-1.png",
  },
  {
    id: "656215118984162efffe97fc",
    isActive: false,
    picture: "http://placehold.it/32x32",
    age: 26,
    name: "Malone Walls",
    gender: "male",
    about:
      "Adipisicing eiusmod eu Lorem dolore Lorem esse laboris. Aliqua culpa occaecat qui anim veniam non eiusmod et sint aliquip voluptate consectetur sit. Sunt aliqua dolore id nulla nisi mollit consequat consequat dolore aliqua deserunt cupidatat id. Ad aliquip commodo reprehenderit voluptate irure deserunt adipisicing minim excepteur velit occaecat Lorem. Exercitation incididunt reprehenderit reprehenderit proident irure mollit pariatur irure eu fugiat. Proident culpa occaecat non consectetur incididunt non nisi nulla minim sit irure. Aliqua dolore mollit est sunt excepteur excepteur elit quis.\r\n",
    profile: "https://www.catholicsingles.com/wp-content/uploads/2020/06/7.png",
  },
  {
    id: "65621511bfc975dbec3c0603",
    isActive: false,
    picture: "http://placehold.it/32x32",
    age: 25,
    name: "Santos Gallegos",
    gender: "male",
    about:
      "Consectetur enim eu nisi duis. Cupidatat tempor consectetur nostrud irure nulla aute. Et magna cillum minim sit sunt nisi cupidatat commodo amet ut. In reprehenderit nostrud cillum sunt consectetur irure duis. Ullamco pariatur ipsum ut amet sint irure sint ex.\r\n",
    profile:
      "https://images.unsplash.com/photo-1628563694622-5a76957fd09c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "656215116d8eb4206aa45f95",
    isActive: true,
    picture: "http://placehold.it/32x32",
    age: 38,
    name: "Mccullough Mckinney",
    gender: "male",
    about:
      "Minim minim velit officia cupidatat occaecat laboris nostrud sint sint deserunt magna incididunt fugiat aute. Sint quis Lorem cupidatat nostrud do minim consequat irure velit commodo. Amet duis ullamco in fugiat ullamco ea laborum exercitation laborum mollit id. Nisi esse excepteur anim adipisicing occaecat ex Lorem laboris magna non fugiat. Eu quis id ullamco labore nostrud excepteur qui tempor enim laboris minim ut sunt. Nisi sint anim labore magna amet duis. Irure sit excepteur esse amet.\r\n",
    profile:
      "https://images.unsplash.com/photo-1619412112597-0ac2d2a2d0f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "6562151169891f62c9bfee4c",
    isActive: false,
    picture: "http://placehold.it/32x32",
    age: 34,
    name: "Baird Lowery",
    gender: "male",
    about:
      "Excepteur commodo quis magna sunt. Cillum aliqua amet aliqua esse ad minim consequat cillum excepteur qui pariatur excepteur. Eu est nostrud ut ea enim irure eu est aute dolore. Amet non pariatur ex sit mollit in aliqua fugiat dolor excepteur id. Reprehenderit commodo et cupidatat aliqua do cillum nostrud dolore cillum dolor ullamco dolore dolore excepteur. Sint cupidatat ullamco nulla adipisicing consectetur cillum aute ut.\r\n",
    profile:
      "https://images.unsplash.com/photo-1554177255-61502b352de3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluc3RhZ3JhbSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "6562151125fcf07185f94e59",
    isActive: false,
    picture: "http://placehold.it/32x32",
    age: 24,
    name: "Barrett Rodriguez",
    gender: "male",
    about:
      "Ad minim ut ex non elit sunt voluptate commodo. Anim do adipisicing et culpa aliquip minim sint culpa anim. Dolor culpa est aute aute Lorem consectetur ex aliqua eiusmod sint eiusmod incididunt nisi elit. Fugiat esse aliqua do fugiat proident deserunt cillum veniam reprehenderit sint reprehenderit. Pariatur incididunt sint pariatur ut duis voluptate quis sit quis voluptate id cupidatat labore.\r\n",
    profile:
      "https://images.unsplash.com/photo-1495211895963-08d8812dcbf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluc3RhZ3JhbSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "65621511b9e2121b7e090e64",
    isActive: true,
    picture: "http://placehold.it/32x32",
    age: 20,
    name: "Little Wells",
    gender: "male",
    about:
      "Est dolore ex ad labore irure ex aute reprehenderit adipisicing sunt nulla amet. Reprehenderit nisi ullamco quis eiusmod commodo excepteur aliquip laboris. Qui dolore nostrud in ea excepteur nulla ullamco deserunt ea cillum. Deserunt magna duis Lorem est velit est voluptate anim quis mollit. Minim amet aliquip Lorem sunt.\r\n",
    profile:
      "https://plus.unsplash.com/premium_photo-1669343628944-d0e2d053a5e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGluc3RhZ3JhbSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
];
