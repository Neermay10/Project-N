function checkPassword() {
    var password = document.getElementById('passwordInput').value;
    var startPage = document.getElementById('startPage');
    var accessGranted = document.getElementById('accessGranted');
    var accessDenied = document.getElementById('accessDenied');
    var loadingContainer1 = document.getElementById('loadingContainer1');
    var loadingContainer2 = document.getElementById('loadingContainer2');
    var loadingContainer3 = document.getElementById('loadingContainer3');
    
    // Define your passwords and their corresponding URLs
    var passwordMap = {
        'encryption': 'Encrption.html',
        'ishu0936': 'Lovebirds/index.html',
        'quote': 'TheQuoteMine/index.html',
        'runner': 'FlappyRunner/index.html'
    };
  
    // Check if the entered password matches any defined passwords
    if (password in passwordMap) {
        var url = passwordMap[password];
        startPage.classList.add('hidden');
        accessGranted.classList.remove('hidden');

        
        setTimeout(function() {
            accessGranted.classList.add('hidden');
            loadingContainer1.classList.remove('hidden');
            setTimeout(function() {
                loadingContainer1.classList.add('hidden');
                loadingContainer2.classList.remove('hidden');
                setTimeout(function() {
                    loadingContainer2.classList.add('hidden');
                    loadingContainer3.classList.remove('hidden');
                    setTimeout(function() {
                        loadingContainer3.classList.add('hidden');
                        loadingContainer1.classList.remove('hidden');
                        setTimeout(function() {
                            loadingContainer1.classList.add('hidden');
                            loadingContainer2.classList.remove('hidden');
                            setTimeout(function() {
                                loadingContainer2.classList.add('hidden');
                                loadingContainer3.classList.remove('hidden');
                                setTimeout(function() {
                                    loadingContainer3.classList.add('hidden');
                                    loadingContainer1.classList.remove('hidden');
                                    setTimeout(function() {
                                        loadingContainer1.classList.add('hidden');
                                        loadingContainer2.classList.remove('hidden');
                                        setTimeout(function() {
                                            loadingContainer2.classList.add('hidden');
                                            loadingContainer3.classList.remove('hidden');
                                            setTimeout(function() {
                                                loadingContainer3.classList.add('hidden');
                                                loadingContainer1.classList.remove('hidden');
                                                setTimeout(function() {
                                                    loadingContainer1.classList.add('hidden');
                                                    loadingContainer2.classList.remove('hidden');
                                                    setTimeout(function() {
                                                        loadingContainer2.classList.add('hidden');
                                                        loadingContainer3.classList.remove('hidden');
                                                        setTimeout(function() {
                                                            loadingContainer3.classList.add('hidden');
                                                            loadingContainer1.classList.remove('hidden');
                                                        },500);
                                                    },500);
                                                },500);
                                            },500);
                                        },500);
                                    },500);
                                },500);
                            },500);
                        },500);
                    },500);
                },500);
            },500);
        }, 2000);

 
    // Redirect to the corresponding URL after 10 seconds
    setTimeout(function() {
        window.location.href = url;
    }, 8000);
  
    } else {
        startPage.classList.add('hidden');
        accessDenied.classList.remove('hidden');
        document.getElementById('passwordInput').value = '';
  
        // Hide access denied message and input box after 2 seconds
        setTimeout(function() {
            accessDenied.classList.add('hidden');
            startPage.classList.remove('hidden');
        }, 2000);
    }
}
  
window.onload = function() {
    var passwordInput = document.getElementById('passwordInput');
    passwordInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            checkPassword();
        }
    });
};