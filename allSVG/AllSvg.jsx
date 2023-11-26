import { Path, Svg, G, Rect, ClipPath, Defs } from "react-native-svg";

export const Plus = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-circle-plus"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#fff"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
      <Path d="M9 12h6" />
      <Path d="M12 9v6" />
    </Svg>
  );
};
export const Search = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <G clip-path="url(#clip0_1_379)">
        <Path
          d="M3 10C3 10.9193 3.18106 11.8295 3.53284 12.6788C3.88463 13.5281 4.40024 14.2997 5.05025 14.9497C5.70026 15.5998 6.47194 16.1154 7.32122 16.4672C8.17049 16.8189 9.08075 17 10 17C10.9193 17 11.8295 16.8189 12.6788 16.4672C13.5281 16.1154 14.2997 15.5998 14.9497 14.9497C15.5998 14.2997 16.1154 13.5281 16.4672 12.6788C16.8189 11.8295 17 10.9193 17 10C17 9.08075 16.8189 8.17049 16.4672 7.32122C16.1154 6.47194 15.5998 5.70026 14.9497 5.05025C14.2997 4.40024 13.5281 3.88463 12.6788 3.53284C11.8295 3.18106 10.9193 3 10 3C9.08075 3 8.17049 3.18106 7.32122 3.53284C6.47194 3.88463 5.70026 4.40024 5.05025 5.05025C4.40024 5.70026 3.88463 6.47194 3.53284 7.32122C3.18106 8.17049 3 9.08075 3 10Z"
          stroke="#fff"
          stroke-width="0.833333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M21 21L15 15"
          stroke="#fff"
          stroke-width="0.833333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_379">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export const Message = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-messenger"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#ffffff"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
      <Path d="M8 13l3 -2l2 2l3 -2" />
    </Svg>
  );
};
export const HomeSVG = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-home"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="#fff"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M5 12l-2 0l9 -9l9 9l-2 0" />
      <Path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
      <Path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
    </Svg>
  );
};
export const HomeBlue = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="36"
      height="36"
      viewBox="0 0 50 50"
      style="fill:#ffffff;"
    >
      <Path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></Path>
    </Svg>
  );
};
export const Like = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-thumb-up"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="#fff"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
    </Svg>
  );
};
export const Comment = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-message-circle"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="#fff"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
    </Svg>
  );
};
export const Share = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-share-3"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="#fff"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z" />
    </Svg>
  );
};

export const UserInProfile = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-user-filled"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="#fff"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path
        d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z"
        stroke-width="0"
        fill="#fff"
      />
      <Path
        d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z"
        stroke-width="0"
        fill="#fff"
      />
    </Svg>
  );
};
export const Dots = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-dots"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="#fff"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <Path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <Path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </Svg>
  );
};

export const UserGroup = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-users-group"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="#fff"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <Path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
      <Path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <Path d="M17 10h2a2 2 0 0 1 2 2v1" />
      <Path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <Path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
    </Svg>
  );
};
export const RoundedUser = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-user-circle"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="#fff"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <Path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <Path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
    </Svg>
  );
};
export const RecentNews = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-calendar-clock"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="#fff"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M10.5 21h-4.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3" />
      <Path d="M16 3v4" />
      <Path d="M8 3v4" />
      <Path d="M4 11h10" />
      <Path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <Path d="M18 16.5v1.5l.5 .5" />
    </Svg>
  );
};
export const NotificationIcon = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-bell"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="#fff"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
      <Path d="M9 17v1a3 3 0 0 0 6 0v-1" />
    </Svg>
  );
};
export const MenuBaseline = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-baseline-density-medium"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="#fff"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M4 20h16" />
      <Path d="M4 12h16" />
      <Path d="M4 4h16" />
    </Svg>
  );
};
export const BackArrow = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrow-narrow-left"
      width="34"
      height="34"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="#fff"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M5 12l14 0" />
      <Path d="M5 12l4 4" />
      <Path d="M5 12l4 -4" />
    </Svg>
  );
};
