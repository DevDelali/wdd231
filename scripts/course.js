const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// helper to render an array of course objects into the #course-id section
function renderCourses(courseArray) {
    const container = document.getElementById('course-id');
    if (!container) return;

    // remove any existing <ul> before building a new one
    const existing = container.querySelector('ul');
    if (existing) {
        existing.remove();
    }

    const list = document.createElement('ul');
    courseArray.forEach(course => {
        const item = document.createElement('li');
        item.textContent = `${course.subject} ${course.number} – ${course.title}`;
        list.appendChild(item);
    });

    container.appendChild(list);
}

// set up filters and initial rendering after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('course-id');
    if (!container) return; // nothing to do if the section is missing

    // render all courses initially
    renderCourses(courses);

    // wire up filter buttons; they use data-subject attribute
    const filterDiv = document.getElementById('course-filters');
    if (filterDiv) {
        filterDiv.addEventListener('click', e => {
            const btn = e.target.closest('button[data-subject]');
            if (!btn) return;
            const subject = btn.getAttribute('data-subject');
            let filtered;
            if (subject === 'All') {
                filtered = courses;
            } else {
                filtered = courses.filter(c => c.subject === subject);
            }
            renderCourses(filtered);
        });
    }
});

