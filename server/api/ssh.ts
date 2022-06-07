import { NodeSSH } from 'node-ssh'

const ssh = new NodeSSH()

export default defineEventHandler(() => {
	let res = ''
	ssh
		.connect({
			host: '*',
			username: '*',
			password: '*',
		})
		.then(() => {
			ssh.execCommand('cat exam.sql').then((result: { stdout: any; stderr: any }) => {
				res = result.stderr || result.stdout
				console.log(result.stdout) // stdout
				console.log(result.stderr) // stderr
				ssh.dispose()
			})
		})

	return res
})
