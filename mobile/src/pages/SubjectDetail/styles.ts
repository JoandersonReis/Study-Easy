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
    color: "#fff",
    marginTop: 30,
    flex: 1,
    width: "80%",
    alignSelf: "center",
    fontFamily: "Poppins SemiBold",
  },

  doneBtn: {
    width: "95%",
    backgroundColor: "#27ae60",
    borderRadius: 8,
    height: 50,
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 5,
    marginBottom: 5
  },

  doneBtnTxt: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Archivo Bold",
    marginLeft: "29%"
  },

  editBtn: {
    width: "95%",
    backgroundColor: "#2980b9",
    borderRadius: 8,
    height: 50,
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 5,
    marginBottom: 5
  },

  editBtnTxt: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Archivo Bold",
    marginLeft: "30%"
  },

  removeBtn: {
    width: "95%",
    backgroundColor: "#c0392b",
    borderRadius: 8,
    height: 50,
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 5,
    marginBottom: 5
  },

  removeBtnTxt: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Archivo Bold",
    marginLeft: "27%"
  },
})
