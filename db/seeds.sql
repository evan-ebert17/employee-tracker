INSERT INTO departments (department_name)
VALUES ("Germ Eating"),
       ("Pencil Pushing"),
       ("Jello-Makers"),
       ("People who Made Pikmin");

INSERT INTO roles (title, salary, department_id)
        -- Germ
VALUES  ("Germ Manager", 150000, 1),
        ("Germ Maker", 91800, 1),
        ("Germ Conniser", 80000, 1),
        --  Pencil
        ("Pencil Manager", 125999, 2),
        ("Master Pusher ", 92000, 2),
        ("Pencil Itself", 30000, 2),
        --  Jello
        ("Jello Manager", 170000, 3),
        ("Jello Maker", 120000, 3),
        ("Jello Analyst ", 75000, 3),
        --  Pikmin
        ("Biggest Pikmin Fan ", 190000, 4),
        ("Moderate Pikmin Fan ", 90000, 4),
        ("Pikmin Unjoyer", 100, 4);

INSERT INTO employees (first_name, last_name, role_id)
        -- germ
VALUES ("Gerry", "Murm", 1),
       ("Handsa", "Nitzer", 2),
       ("Isoprob", "Alkay", 2),
        --  Pencil
       ("Shay", "Ving", 4),
       ("Eirai", "Sjyur", 5),
       ("Gray", "Phite", 5),
        --  Jello
       ("Jael", "Lough", 6),
       ("Gella", "Tinneous", 7),
       ("Sherry", "Fleighvourg", 8),
        --  Pikmin
       ("Red", "Pitchman", 10),
       ("Blue", "Pikemine", 11),
       ("Yellow", "Pickmine", 11);