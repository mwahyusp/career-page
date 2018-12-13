const nav = document.getElementsByTagName('nav')[0];
const jobListDiv = document.getElementsByClassName('job-list')[0];

const jobList = [
    {
        position: 'Software Engineer',
        location: 'Jakarta, Indonesia',
        type: 'engineer'
    },
    {
        position: 'AI Engineer',
        location: 'Jakarta, Indonesia',
        type: 'engineer'
    },
    {
        position: 'UX Designer',
        location: 'Jakarta, Indonesia',
        type: 'design'
    },
    {
        position: 'UI Designer',
        location: 'Jakarta, Indonesia',
        type: 'design'
    },
    {
        position: 'Product Owner',
        location: 'Jakarta, Indonesia',
        type: 'product'
    },
    {
        position: 'Marketing Manager',
        location: 'Jakarta, Indonesia',
        type: 'marketing'
    }
]

const setNavbar = function() {
    window.pageYOffset >= 10
    ? nav.classList.add('scrolled')
    : nav.classList.remove('scrolled')
}

window.onscroll = function() {
    setNavbar();
}

const init = function() {
    setNavbar();

    const positions = document.getElementsByClassName('tab');
    const removeActive = function() {
        for (let item of positions) {
            item.classList.remove('active')
        }
    }

    const filterData = function(tab) {
        let data;
        switch (tab) {
            case '0':
                data = jobList
                break;
            case '1':
                data = jobList.filter(job => job.type == 'engineer')
                break;
            case '2':
                data = jobList.filter(job => job.type == 'design')
                break;
            case '3':
                data = jobList.filter(job => job.type == 'product')
                break;
            case '4':
                data = jobList.filter(job => job.type == 'marketing')
                break;
            case '5':
                data = jobList.filter(job => job.type == 'support')
                break;
        }

        return data;
    }

    const updateUI = function(data) {
        let html = `<p class="center text-center">Tidak ada posisi yang tersedia.<p>`;
        if (data.length > 0) {
            html = ``;
            data.map(data => {
                html += `<a class="w-3 ${data.type}" href="#"><h3>${data.position}</h3><span>${data.location}</span></a>`;
            })
        }

        jobListDiv.innerHTML = html;
    }

    for (let item of positions) {
        item.addEventListener('click', function(e) {
            removeActive();
            addEventListener('click', function(e) {
                e.target.classList.add('active');
            })
            let data = filterData(item.getAttribute('tab'));
            updateUI(data);
        })
    }

    updateUI(jobList);
}

init();
