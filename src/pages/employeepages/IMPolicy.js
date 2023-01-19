import styles from "./IMPolicy.module.css"
function IMPolicy(){
    return(
        <div className={styles.imp}>
        <h1>Incident Management Policy</h1>
        <p>The purpose of the incident management policy is to provide organization-wide guidance to employees on the proper response to, and efficient and timely reporting of, computer security-related incidents, such as computer viruses, unauthorized user activity, and suspected compromise of data. It also addresses non-IT incidents such as power failure. 
            Further, this policy provides guidance regarding the need for developing and maintaining an incident management process within XXX.</p>
        <h2>Employees</h2>
        <p>This policy applies to all  Employees, Contractors, 
            and Third Party Employees, who use, process, and manage information from individual systems or servers.</p>
        <h2>Records</h2>
        <p>Records being generated as part of the Incident Management Policy shall be retained for a period of two years. Records shall be in hard copy or electronic media. 
            The records shall be owned by the respective system administrators and shall be audited once a year.</p>
        <h2>Privacy</h2>
        <p>The Incident Management Policy document shall be considered as “confidential” and shall be made available to the concerned persons with proper access control. 
            Subsequent changes and versions of this document shall be controlled.</p>
        </div>
    )
}

export default IMPolicy;