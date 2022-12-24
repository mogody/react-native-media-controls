import { StyleSheet } from "react-native";

const containerBackgroundColor = "rgba(45, 59, 62, 0.4)";
const playButtonBorderColor = "rgba(255,255,255,0.5)";
const white = "#fff";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: containerBackgroundColor,
    bottom: 0,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    left: 0,
    paddingHorizontal: 16,
    paddingVertical: 16,
    position: "absolute",
    right: 0,
    top: 0,
  },
  controlsRow: {
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
    justifyContent: "center",
  },
  fullScreenContainer: {
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "flex-end",
    paddingLeft: 12,
  },
  playButton: {
    alignItems: "center",
    borderColor: playButtonBorderColor,
    borderRadius: 4,
    borderWidth: 0,
    height: 40,
    justifyContent: "center",
    width: 40,
  },
  playIcon: {
    height: 16,
    resizeMode: "contain",
    width: 16,
  },
  progressColumnContainer: {
    flex: 1,
    paddingBottom: 4,
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  progressSlider: {
    alignSelf: "stretch",
  },
  replayIcon: {
    height: 16,
    resizeMode: "stretch",
    width: 16,
  },
  thumb: {
    backgroundColor: white,
    borderRadius: 8,
    borderWidth: 2,
    height: 16,
    width: 16,
  },
  timeRow: {
    alignSelf: "stretch",
  },
  timerLabel: {
    color: white,
    fontSize: 12,
  },
  timerLabelsContainer: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  toolbar: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
  },
  toolbarRow: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  track: {
    borderRadius: 1,
    height: 5,
  },
});
