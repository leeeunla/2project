using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    Rigidbody2D rbody;
    float axisH = 0.0f;
    public float speed = 3.0f;

    public float jump = 9.0f;
    public LayerMask groundLayer;
    bool goJump = false;
    bool onGround = false;

    Animator animator; // 애니메이터
    public string stopAnime = "PlayerStop";
    public string moveAnime = "PlayerMove";
    public string jumpAnime = "PlayerJump";
    public string goalAnime = "PlayerGoal";
    public string deadAnime = "PlayerOver";
    string nowAnime = "";
    string oldAnime = "";

    public static string gameState = "playing"; // 게임 상태

    public int score = 0; // 점수

    // Start is called before the first frame update
    void Start()
    {
        rbody = this.GetComponent<Rigidbody2D>();

        animator = GetComponent<Animator>();
        nowAnime = stopAnime;
        oldAnime = stopAnime;

        gameState = "playing"; // 게임 중
    }

    // Update is called once per frame
    void Update()
    {
        if (gameState != "playing")
        {
            return;
        }

        axisH = Input.GetAxisRaw("Horizontal");
        if (axisH > 0.0f)
        {
            transform.localScale = new Vector3(1, 1, transform.localScale.z);
        }
        else if (axisH < 0.0f)
        {
            transform.localScale = new Vector3(-1, 1, transform.localScale.z);
        }

        if (Input.GetButtonDown("Jump"))
        {
            Jump();
        }
    }

    private void FixedUpdate()
    {
        if (gameState != "playing")
        {
            return;
        }

        onGround = Physics2D.Linecast(transform.position,
                                      transform.position - (transform.up * 0.1f),
                                      groundLayer);
        if (onGround || axisH != 0)
        {
            rbody.velocity = new Vector2(speed * axisH, rbody.velocity.y);
        }
        if (onGround && goJump)
        {
            Vector2 jumpPw = new Vector2(0, jump);
            rbody.AddForce(jumpPw, ForceMode2D.Impulse);
            goJump = false;
        }

        if (onGround)
        {
            // 지면 위
            if (axisH == 0)
            {
                nowAnime = stopAnime;       // 정지
            }
            else
            {
                nowAnime = moveAnime;       // 이동
            }
        }
        else
        {
            // 공중
            nowAnime = jumpAnime;
        }

        if (nowAnime != oldAnime)
        {
            oldAnime = nowAnime;
            animator.Play(nowAnime);        // 애니메이션 재생
        }
    }

    public void Jump()
    {
        goJump = true;
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.tag == "Goal")
        {
            Goal();
        }
        else if (collision.gameObject.tag == "Dead")
        {
            GameOver();
        }

    }

    public void Goal()
    {
        animator.Play(goalAnime);
        gameState = "gameclear";
        GameStop(); // 게임 중지
    }

    public void GameOver()
    {
        animator.Play(deadAnime);

        gameState = "gameover";
        GameStop(); // 게임 중지s
        // =====================
        // 게임 오버 연출
        // =====================
        // 플레이어의 충돌 판정 비활성
        GetComponent<CapsuleCollider2D>().enabled = false;
        // 플레이어를 위로 튀어 오르게 하는 연출
        rbody.AddForce(new Vector2(0, 5), ForceMode2D.Impulse);
    }

    void GameStop()
    {
        // Rigidbody2D 가져오기
        Rigidbody2D rbody = GetComponent<Rigidbody2D>();
        // 속도를 0으로 하여 강제 정지
        rbody.velocity = new Vector2(0, 0);
    }

}
