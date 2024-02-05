package com.dw.adventure_of_link.enumstatus;

public enum Gender {

	MAN("남성"),
	WOMAN("여성");
	
	private final String desc;

	private Gender(String desc) {
		this.desc = desc;
	}

	public String getDesc() {
		return desc;
	}
	
}