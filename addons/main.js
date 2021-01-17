
function formatData(data) {
        var ppl = data.split('-');
        var i = 0;
        var people = [];
        for (var person=0; person < ppl.length; person++){
            var line = ppl[person].split('\n');
            var user = {};
            user["name"] = line[i];
            user["term"] = line[i+1];
            user["courses"] = line[i+2].split(' ');
            user["timezone"] = line[i+3];
            var habits = line[i+4].split(' ');
            user["tod"] = habits[0];
            user["focus"] = habits[1];
            user["style"] = habits[2];
            user["wantedMembers"] = parseInt(line[i+5]);
            user["group"] = line[i+6].split(' ');
            if (user["group"].includes('')) {
                user["group"] = [];
            }
            people.push(user);
            if (person == 0) {
                i++;
            }
        }
        return(people);
} 

function findMatches(person) {
    var possibleMatches = [];
    for (var student=0; student<students.length; student++) {
        if (students[student]["term"] == person["term"]) {
            for (var course=0; course<person["courses"].length; course++) {
                if (students[student]["courses"].includes(person["courses"][course]) && !possibleMatches.includes(students[student]) && students[student]["wantedMembers"] != 1 && person["wantedMembers"] > students[student]["group"].length + 1) {
                    possibleMatches.push(students[student]);
                }
            }
        }
    }
    return(possibleMatches);
}

function addToTeam(person,memberName) {
    person["group"].push(memberName);
    person["wantedMembers"]--;
    for (var student=0; student<students.length; student++) {
        if (students[student]["name"] == memberName) {
            if (students[student]["group"].length != 0) {
                for (var member=0; member<students[student]["group"].length; member++) {
                    person["group"].push(students[student]["group"][member]);
                    person["wantedMembers"]--;
                    for (var s=0; s<students.length; s++) {
                        if (students[s]["name"] == students[student]["group"][member]) {
                            students[s]["group"].push(person["name"]);
                            students[s]["wantedMembers"]--;
                        }
                    }
                }
            }
            students[student]["group"].push(person["name"]);
            students[student]["wantedMembers"]--;
        }
    }
}

window.onload = function(){
    let matches = findMatches(person);
        console.log(matches[match]);

        document.getElementById('name-a').innerHTML = matches[0].name;
        var courseStr;
        for (var course=0; course<matches[0].courses.length; course++) {
            courseStr += matches[0].courses[course];
            if (course != matches[0].courses.length-1) {
                courseStr += ' ';
            }
        }
        document.getElementById('courses-a').innerHTML = courseStr;
        document.getElementById('timezone-a').innerHTML = matches[0].timezone;
        document.getElementById('tod-a').innerHTML = matches[0].time;
        document.getElementById('focus-a').innerHTML = matches[0].focus;
        document.getElementById('style-a').innerHTML = matches[0].style;
        if (matches[0].group.length != 0) {
            var groupStr;
            for (var p=0; p<matches[0].group.length; p++) {
                groupStr += matches[0].group[p];
                if (p != matches[0].group.length-1) {
                    groupStr += ' ';
                }
            }
            document.getElementById('group-a').innerHTML = groupStr;
        }

        document.getElementById('name-g').innerHTML = matches[1].name;
        var courseStr;
        for (var course=0; course<matches[1].courses.length; course++) {
            courseStr += matches[1].courses[course];
            if (course != matches[1].courses.length-1) {
                courseStr += ' ';
            }
        }
        document.getElementById('courses-g').innerHTML = courseStr;
        document.getElementById('timezone-g').innerHTML = matches[1].timezone;
        document.getElementById('tod-g').innerHTML = matches[1].time;
        document.getElementById('focus-g').innerHTML = matches[1].focus;
        document.getElementById('style-g').innerHTML = matches[1].style;
        if (matches[1].group.length != 0) {
            var groupStr;
            for (var p=0; p<matches[1].group.length; p++) {
                groupStr += matches[1].group[p];
                if (p != matches[1].group.length-1) {
                    groupStr += ' ';
                }
            }
            document.getElementById('group-g').innerHTML = groupStr;
        }

        document.getElementById('name-j').innerHTML = matches[2].name;
        var courseStr;
        for (var course=0; course<matches[2].courses.length; course++) {
            courseStr += matches[2].courses[course];
            if (course != matches[2].courses.length-1) {
                courseStr += ' ';
            }
        }
        document.getElementById('courses-j').innerHTML = courseStr;
        document.getElementById('timezone-j').innerHTML = matches[2].timezone;
        document.getElementById('tod-j').innerHTML = matches[2].time;
        document.getElementById('focus-j').innerHTML = matches[2].focus;
        document.getElementById('style-j').innerHTML = matches[2].style;
        if (matches[2].group.length != 0) {
            var groupStr;
            for (var p=0; p<matches[2].group.length; p++) {
                groupStr += matches[2].group[p];
                if (p != matches[2].group.length-1) {
                    groupStr += ' ';
                }
            }
            document.getElementById('group-j').innerHTML = groupStr;
        }
        
    
    console.log('new');
}