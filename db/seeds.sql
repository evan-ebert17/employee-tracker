INSERT INTO departments (department_name)
VALUES ("Germ Eating"),
       ("Pencil Pushing"),
       ("Jello-Makers"),
       ("People who Made Pikmin");

INSERT INTO roles (title, salary, department_id)
        -- Germ
VALUES  ("Germ Manager", 150000.00, 1),
        ("Germ Maker", 91800.00, 1),
        ("Germ Conniser", 80000.80, 1),
        --  Pencil
        ("Pencil Manager", 125999.00, 2),
        ("Master Pusher ", 92000.00, 2),
        ("Pencil Itself", 30000.50, 2),
        --  Jello
        ("Jello Manager", 170000.00, 3),
        ("Jello Maker", 120000.50, 3),
        ("Jello Analyst ", 75000.00, 3),
        --  Pikmin
        ("Biggest Pikmin Fan ", 190000.50, 4),
        ("Moderate Pikmin Fan ", 90000.00, 4),
        ("Pikmin Unjoyer", 100, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
        -- germ
VALUES ("Gerry", "Murm", 1, null),
       ("Handsa", "Nitzer", 2, 1),
       ("Isoprob", "Alkay", 2, 1),
        --  Pencil
       ("Shay", "Ving", 4, null),
       ("Eirai", "Sjyur", 5, 5),
       ("Gray", "Phite", 5, 5),
        --  Jello
       ("Jael", "Lough", 6, null),
       ("Gella", "Tinneous", 7, 8),
       ("Sherry", "Fleighvourg", 8, 8),
        --  Pikmin
       ("Red", "Pitchman", 10, null),
       ("Blue", "Pikemine", 11, 13),
       ("Yellow", "Pickmine", 11, 13);