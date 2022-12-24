import React from "react";
import {
  TouchableOpacity,
  View,
  ActivityIndicator,
  Image,
  ViewStyle,
} from "react-native";
import styles from "./MediaControls.style";
import { getPlayerStateIcon } from "./utils";
import { Props } from "./MediaControls";
import { PLAYER_STATES } from "./constants/playerStates";

type ControlsProps = Pick<
  Props,
  "isLoading" | "mainColor" | "playerState" | "onReplay" | "controlStyle"
> & {
  onPause: () => void;
  customControlStyle?: ViewStyle;
};

const Controls = (props: ControlsProps) => {
  const {
    isLoading,
    mainColor,
    playerState,
    onReplay,
    onPause,
    customControlStyle,
  } = props;
  const icon = getPlayerStateIcon(playerState);
  const pressAction = playerState === PLAYER_STATES.ENDED ? onReplay : onPause;

  const content = isLoading ? (
    <ActivityIndicator size="small" color="#FFF" />
  ) : (
    <TouchableOpacity
      style={[
        styles.playButton,
        { backgroundColor: mainColor },
        customControlStyle,
      ]}
      onPress={pressAction}
      accessibilityLabel={PLAYER_STATES.PAUSED ? "点击播放" : "点击暂停"}
      accessibilityHint={"播放或暂停视频"}
    >
      <Image source={icon} style={styles.playIcon} />
    </TouchableOpacity>
  );

  return <View style={[styles.controlsRow]}>{content}</View>;
};

export { Controls };
