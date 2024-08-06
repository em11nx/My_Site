import sqlite3

def startup():
    con = sqlite3.connect("userEmail.db")
    cur = con.cursor()
    cur.execute("CREATE TABLE IF NOT EXISTS formSubmissons(name, email, subject)")
    con.commit()
    con.close()

def sendNewDataToDB(name, email, subject):
    con = sqlite3.connect("userEmail.db")
    cur = con.cursor()
    cur.execute("""INSERT INTO formSubmissons VALUES(?, ?, ?)""", (name, email, subject))
    con.commit()
    con.close()
