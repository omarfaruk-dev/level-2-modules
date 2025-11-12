// Union |

type UserRole = 'admin' | 'user' | 'guest'

const getDashboard = (role: UserRole) => {
    if(role === 'admin'){
        return 'Admin Dashboard'
    } else if(role === 'user'){
        return 'User Dashboard'
    } else {
        return 'Guest Dashboard'
    }
};

getDashboard('admin')

//Ingersection

type Employee = {
    id: string;
    name: string;
    phone: string;
}

type Manager = {
    designation: string;
    teamSize: number;
}

type EmployeeManager = Employee & Manager

const ChowdhuryShaheb: EmployeeManager ={
    id: '1234',
    name: 'Chowdhury Shaheb',
    phone: '01245',
    designation: 'manager',
    teamSize: 5
}