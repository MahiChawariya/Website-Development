from flask import Flask, render_template, request, redirect, url_for, session
import sqlite3
import os

app = Flask(__name__)
app.secret_key = "insurance123"
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, "insurance.db")

print("BASE_DIR:", BASE_DIR)
print("DB_PATH:", DB_PATH)
print("EXISTS:", os.path.exists(DB_PATH))

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/quote", methods=["GET", "POST"])
def quote():

    if request.method == "POST":
        name = request.form["name"]
        email = request.form["email"]
        phone = request.form["phone"]
        insurance_type = request.form["insurance_type"]
        city = request.form["city"]

        db_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "insurance.db")
        conn = sqlite3.connect(db_path)
        cursor = conn.cursor()

        cursor.execute("""
            INSERT INTO quote
            (name, email, phone, insurance_type, city)
            VALUES (?, ?, ?, ?, ?)
        """, (name, email, phone, insurance_type, city))

        conn.commit()
        conn.close()

        return "Quote Submitted Successfully!"

    return render_template("quote.html")

@app.route("/renewal", methods=["GET", "POST"])
def renewal():
    if request.method == "POST":
        name = request.form["name"]
        email = request.form["email"]
        phone = request.form["phone"]
        policy_number = request.form["policy_number"]
        expiry_date = request.form["expiry_date"]

        db_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "insurance.db")
        conn = sqlite3.connect(db_path)
        cursor = conn.cursor()

        cursor.execute("""
        INSERT INTO renewal
        (name, email, phone, policy_number, expiry_date)
        VALUES (?, ?, ?, ?, ?)
        """, (name, email, phone, policy_number, expiry_date))

        conn.commit()
        conn.close()

        return "Policy Renewal Submitted Successfully!"

    return render_template("renewal.html")

@app.route("/claim", methods=["GET", "POST"])
def claim():

    if request.method == "POST":

        name = request.form["fullname"]
        email = request.form["email"]
        phone = request.form["mobile"]
        policy_number = request.form["policy_number"]
        insurance_type = request.form["insurance_type"]
        incident_date = request.form["incident_date"]
        claim_amount = request.form["claim_amount"]
        description = request.form["description"]

        db_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "insurance.db")
        conn = sqlite3.connect(db_path)
        cursor = conn.cursor()

        cursor.execute("""
        INSERT INTO claim
        (name, email, phone, policy_number, insurance_type, incident_date, claim_amount, description)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """,
        (name, email, phone, policy_number, insurance_type,
         incident_date, claim_amount, description))

        conn.commit()
        conn.close()

        return "Claim Submitted Successfully!"

    return render_template("claim.html")

@app.route("/appointment", methods=["GET", "POST"])
def appointment():

    if request.method == "POST":

        name = request.form["fullname"]
        email = request.form["email"]
        phone = request.form["mobile"]
        insurance_type = request.form["insurance_type"]
        appointment_date = request.form["appointment_date"]
        appointment_time = request.form["appointment_time"]
        mode = request.form["mode"]
        message = request.form["message"]

        db_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "insurance.db")
        conn = sqlite3.connect(db_path)
        cursor = conn.cursor()

        cursor.execute("""
        INSERT INTO appointment
        (name, email, phone, insurance_type, appointment_date, appointment_time, mode, message)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """,
        (name, email, phone, insurance_type,
         appointment_date, appointment_time, mode, message))

        conn.commit()
        conn.close()

        return "Appointment Booked Successfully!"

    return render_template("appointment.html")


@app.route("/student", methods=["GET", "POST"])
def student():

    if request.method == "POST":

        student_name = request.form["student_name"]
        guardian_name = request.form["guardian_name"]
        email = request.form["email"]
        phone = request.form["mobile"]
        college = request.form["college"]
        course = request.form["course"]
        dob = request.form["dob"]
        city = request.form["city"]

        db_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "insurance.db")
        conn = sqlite3.connect(db_path)
        cursor = conn.cursor()

        cursor.execute("""
        INSERT INTO student
        (student_name, guardian_name, email, phone, college, course, dob, city)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """,
        (student_name, guardian_name, email, phone,
         college, course, dob, city))

        conn.commit()
        conn.close()

        return "Student Insurance Application Submitted Successfully!"

    return render_template("student.html")


@app.route("/health", methods=["GET", "POST"])
def health():

    if request.method == "POST":

        name = request.form["fullname"]
        email = request.form["email"]
        phone = request.form["mobile"]
        age = request.form["age"]
        gender = request.form["gender"]
        city = request.form["city"]
        coverage = request.form["coverage"]
        medical_history = request.form["medical_history"]

        db_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "insurance.db")
        conn = sqlite3.connect(db_path)
        cursor = conn.cursor()

        cursor.execute("""
        INSERT INTO health
        (name, email, phone, age, gender, city, coverage, medical_history)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """,
        (name, email, phone, age, gender, city, coverage, medical_history))

        conn.commit()
        conn.close()

        return "Health Insurance Application Submitted Successfully!"

    return render_template("health.html")


@app.route("/motor", methods=["GET", "POST"])
def motor():

    if request.method == "POST":

        name = request.form["fullname"]
        email = request.form["email"]
        phone = request.form["mobile"]
        vehicle_type = request.form["vehicle_type"]
        registration_number = request.form["registration_number"]
        vehicle_model = request.form["vehicle_model"]
        manufacturing_year = request.form["manufacturing_year"]
        insurance_requirement = request.form["insurance_requirement"]

        db_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "insurance.db")
        conn = sqlite3.connect(db_path)
        cursor = conn.cursor()

        cursor.execute("""
        INSERT INTO motor
        (name, email, phone, vehicle_type, registration_number, vehicle_model, manufacturing_year, insurance_requirement)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """,
        (name, email, phone, vehicle_type,
         registration_number, vehicle_model,
         manufacturing_year, insurance_requirement))

        conn.commit()
        conn.close()

        return "Motor Insurance Application Submitted Successfully!"

    return render_template("motor.html")


@app.route("/feedback", methods=["GET", "POST"])
def feedback():

    if request.method == "POST":

        name = request.form["fullname"]
        email = request.form["email"]
        phone = request.form["phone"]
        rating = request.form["rating"]
        feedback_text = request.form["feedback"]

        db_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "insurance.db")
        conn = sqlite3.connect(db_path)
        cursor = conn.cursor()

        cursor.execute("""
        INSERT INTO feedback
        (name, email, phone, rating, feedback)
        VALUES (?, ?, ?, ?, ?)
        """,
        (name, email, phone, rating, feedback_text))

        conn.commit()
        conn.close()

        return "Thank you for your feedback!"

    return render_template("feedback.html")

@app.route("/login", methods=["GET","POST"])
def login():

    if request.method == "POST":

        username = request.form["username"]
        password = request.form["password"]

        if username == "admin" and password == "mahi123":
            session["admin"] = True
            return redirect("/admin")

        return render_template("login.html", error="Invalid Username or Password")

    return render_template("login.html")
# Admin Page
@app.route("/admin")
def admin():

    if "admin" not in session:
        return redirect("/login")

    return render_template("admin.html")

@app.route("/admin/quotes")
def admin_quotes():
    db_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "insurance.db")
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM quote")
    quotes = cursor.fetchall()

    conn.close()

    return render_template("quotes.html", quotes=quotes)
    
@app.route("/admin/renewals")
def view_renewals():

    db_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "insurance.db")
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM renewal")

    renewals = cursor.fetchall()

    conn.close()

    return render_template("renewals.html", renewals=renewals)

@app.route("/admin/claims")
def view_claims():

    db_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "insurance.db")
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM claim")

    claims = cursor.fetchall()

    conn.close()

    return render_template("claims.html", claims=claims)

@app.route("/admin/appointments")
def view_appointments():

    db_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "insurance.db")
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM appointment")

    appointments = cursor.fetchall()

    conn.close()

    return render_template("appointments.html", appointments=appointments)

@app.route("/admin/students")
def view_students():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM student")
    students = cursor.fetchall()

    conn.close()

    return render_template("students.html", students=students)

@app.route("/admin/health")
def view_health():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM health")
    health = cursor.fetchall()

    conn.close()

    return render_template("health_admin.html", health=health)

@app.route("/admin/motor")
def view_motor():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM motor")
    motors = cursor.fetchall()

    conn.close()

    return render_template("motor_admin.html", motors=motors)

@app.route("/admin/feedback")
def view_feedback():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM feedback")
    feedbacks = cursor.fetchall()

    conn.close()

    return render_template("feedback_admin.html", feedbacks=feedbacks)
    
@app.route("/admin/enquiries")
def view_enquiries():

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM enquiry")

    enquiries = cursor.fetchall()

    conn.close()

    return render_template("enquiries.html", enquiries=enquiries)

@app.route("/logout")
def logout():

    session.pop("admin", None)

    return redirect("/login")
    
@app.route("/enquiry", methods=["GET", "POST"])
def enquiry():

    if request.method == "POST":

        print("Enquiry route called")

        name = request.form["name"]
        email = request.form["email"]
        phone = request.form["phone"]
        company = request.form["company"]
        service = request.form["service"]
        message = request.form["message"]

        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()

        cursor.execute("""
        INSERT INTO enquiry
        (name,email,phone,company,service,message)
        VALUES (?,?,?,?,?,?)
        """, (name, email, phone, company, service, message))

        conn.commit()
        conn.close()

    return redirect(url_for("home"))
   

if __name__ == "__main__":
    print(app.url_map)
    app.run(debug=True)