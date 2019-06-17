const execNotificacoes = async() =>{
	pyShell('python "PYTHON FILE"', function (error, stdout, stderr) {
	      if (error !== null) {
	        console.log('exec error: ' + error);
	      }
	});
}