import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50",
    marginTop: 22
  },

  header: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  headerBtn: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
    marginRight: 10
  },

  headerBtnTxt: {
    marginLeft: 5,
    fontSize: 18,
    fontFamily: "Poppins SemiBold",
    color: "#ddd"
  },

  title: {
    fontSize: 30,
    color: "#CC1478",
    alignSelf: "center",
    marginBottom: 30,
    fontFamily: "Archivo Bold",
  },

  content: {},

  matterContainer: {
    width: "90%",
    alignSelf: "center",
    marginBottom: 20,
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 20
  },

  matterName: {
    flex: 1,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },

  matterNameTxt: {
    color: "#fff",
    fontSize: 25,
    fontFamily: "Poppins SemiBold",
  },

  dayWeekContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12
  },

  dayWeek: {
    backgroundColor: "#2ecc71",
    width: 40,
    height: 30,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: "#f0f0f0"
  },

  dayWeekTxt: {
    color: "#f0f0f0",
    fontFamily: "Poppins Regular",
  },

  matterBtnContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },

  editMatter: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#2980b9",
    borderRadius: 8,
    width: "40%",
    height: 50
  },

  editMatterTxt: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Archivo Bold",
    marginLeft: 5,
  },

  removeMatter: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#c0392b",
    borderRadius: 8,
    width: "40%",
    height: 50
  },

  removeMatterTxt: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Archivo Bold",
    marginLeft: 5,
  },

  addMatter: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    height: 70,
    width: 70,
    bottom: 10,
    right: 10,
    backgroundColor: "#27ae60",
    borderColor: "#fff",
    borderWidth: 2
  },

  whatsapp: {
    backgroundColor: "#fff",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    height: 70,
    width: 70,
    bottom: 10,
    left: 10,
    borderColor: "#27ae60",
    borderWidth: 2
  }
})
