import sqlite3

conn = sqlite3.connect("insurance.db")
cursor = conn.cursor()

# Quote table
cursor.execute("""
CREATE TABLE IF NOT EXISTS quote (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    phone TEXT,
    insurance_type TEXT,
    city TEXT
)
""")

# Renewal table
cursor.execute("""
CREATE TABLE IF NOT EXISTS renewal (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    phone TEXT,
    policy_number TEXT,
    expiry_date TEXT
)
""")

# Claim table
cursor.execute("""
CREATE TABLE IF NOT EXISTS claim (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    phone TEXT,
    policy_number TEXT,
    insurance_type TEXT,
    incident_date TEXT,
    claim_amount TEXT,
    description TEXT
)
""")


# Appointment table
cursor.execute("""
CREATE TABLE IF NOT EXISTS appointment (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    phone TEXT,
    insurance_type TEXT,
    appointment_date TEXT,
    appointment_time TEXT,
    mode TEXT,
    message TEXT
)
""")

# Student Insurance table
cursor.execute("""
CREATE TABLE IF NOT EXISTS student (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    student_name TEXT,
    guardian_name TEXT,
    email TEXT,
    phone TEXT,
    college TEXT,
    course TEXT,
    dob TEXT,
    city TEXT
)
""")

# Health Insurance table
cursor.execute("""
CREATE TABLE IF NOT EXISTS health (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    phone TEXT,
    age TEXT,
    gender TEXT,
    city TEXT,
    coverage TEXT,
    medical_history TEXT
)
""")

# Motor Insurance table
cursor.execute("""
CREATE TABLE IF NOT EXISTS motor (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    phone TEXT,
    vehicle_type TEXT,
    registration_number TEXT,
    vehicle_model TEXT,
    manufacturing_year TEXT,
    insurance_requirement TEXT
)
""")
# Feedback table
cursor.execute("""
CREATE TABLE IF NOT EXISTS feedback (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    phone TEXT,
    rating TEXT,
    feedback TEXT
)
""")

# Enquiry table
cursor.execute("""
CREATE TABLE IF NOT EXISTS enquiry (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    phone TEXT,
    company TEXT,
    service TEXT,
    message TEXT
)
""")

conn.commit()
conn.close()

print("All tables created successfully!")
