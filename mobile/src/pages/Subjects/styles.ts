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
    textAlign: "center"
  },

  content: {},

  subjectContainer: {
    width: "98%",
    alignSelf: "center",
    marginBottom: 20,
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 20
  },

  subjectName: {
    flex: 1,
    height: 65
  },

  subjectNameTxt: {
    color: "#fff",
    fontSize: 25,
    height: 65,
    textAlign: "center",
    fontFamily: "Poppins SemiBold",
  },

  subjectBtnContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },

  doneSubject: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#27ae60",
    borderRadius: 8,
    width: "30%",
    height: 50
  },

  editSubject: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#2980b9",
    borderRadius: 8,
    width: "30%",
    height: 50
  },

  removeSubject: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#c0392b",
    borderRadius: 8,
    width: "30%",
    height: 50
  },

  addSubject: {
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

  doneSubjectContainer: {
    backgroundColor: "#27ae60" 
  }
})
